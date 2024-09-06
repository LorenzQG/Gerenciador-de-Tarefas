import express from 'express'
import routerTask from './routes/task'
import routerUser from './routes/user'
import cors from 'cors'

const app = express()
const port = 3000
app.use(cors())

app.use(express.json())
app.use('/tasks', routerTask)
app.use('/users', routerUser)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})