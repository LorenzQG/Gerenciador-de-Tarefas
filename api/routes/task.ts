import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import jwt from "jsonwebtoken"


const router = Router();

const prisma = new PrismaClient();

type JwtPayload = {
    id: number,
}

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
  
    try{
      const tasks = await prisma.task.findMany({
        where: {
          userID: users.id,
        }
      })
      res.status(200).json(tasks);

    }catch(err){
      res.status(401).send("Internal Server Error")
    }
  
});

router.post("/", async (req, res) => {
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

  const { title, description } = req.body

  if (!title || !description) {
    res.status(400).send("Title and description are required")
    return;
  }

  const task = await prisma.task.create({
    data: {
      title: title,
      description: description,
      user: {
        connect: {
          id:  users.id, // Assuming userId is passed in the request body
        },
      },
    },
  });
  res.status(201).json(task);
});

router.delete("/:id", async (req, res) => {

  try{
    const { id } = req.params;
    const task = await prisma.task.delete({
        where: {
        id: parseInt(id),
        },
    });
    res.status(200).json(task);
  }catch(err){
    res.status(401).send("Internal Server Error")
    return
  }
   
});

router.put("/:id", async (req, res) =>{
    const { id } = req.params

    const { title, description } = req.body
    await prisma.task.update({
        where: {
            id: parseInt(id),
        },
        data: {
            title,
            description
        }
    })

})


export default router;
