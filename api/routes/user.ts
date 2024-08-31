import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const prisma = new PrismaClient();

type JwtPayload = {
    id: number,
}

router.post("/", async (req, res) => {
    const { name, email, password } = req.body

    const emailExists = await prisma.user.findFirst({
        where: {
            email: email,
        },
    })

    if (!name || !email) {
        res.status(400).send("Name and email are required");
        return;
    }

    
    if (emailExists){
        res.status(400).send("Email already exists")
        return
    }

    const hashPassword = await bcrypt.hash(password, 8);

    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashPassword,
        },
    })
    const { password: _, ...userNopass } = user;
    res.status(201).json(userNopass);
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
    })

    if (!user){
        res.status(400).send("Email not found")
        return
    }

    const validPassword = await bcrypt.compare(password, user.password)

    if(!validPassword){
        res.status(400).send("Invalid password")
        return
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? "secret", {expiresIn: '8h'})

    const { password: _, ...userLogin } = user

    return res.json({user: userLogin, token: token})
})

router.get("/", async (req, res) => {
    const { authorization } = req.headers

    if (!authorization){
        res.status(401).send("User not authenticated")
        return
    }
    const token = authorization.split(" ")[1]
    const { id } = jwt.verify(token, process.env.JWT_SECRET ?? "secret") as JwtPayload

    const users = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!users){
        res.status(404).send("User not authenticated")
        return
    }

    const { password: _, ...loggedUser } = users

    res.json(loggedUser)
})


export default router;