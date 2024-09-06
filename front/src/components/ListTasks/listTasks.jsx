import "./listTasks.css"
import "./listTasksMedia.css"
import api from "../../services/api"
import Modal from "../Modal/Modal"
import { useState, useRef } from "react"

export default function ListTasks({ task, setTasks }) {
  const [isOpen, setIsOpen] = useState(false)
  const titleInput = useRef()
  const descInput = useRef()

  const creationDate = task.creationDate
  const date = creationDate.split("T")
  const hour = date[1].split(".")



  async function deleteTask() {
    await api.delete(`/tasks/${task.id}`)
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id))
  }

  async function updateTask(){
    await api.put(`/tasks/${task.id}`, {
      title: titleInput.current.value,
      description: descInput.current.value
    })

    setIsOpen(!isOpen)
  }

  return (
    <div className="task">
      <h3 className="task-title">{task.title}</h3>
      <p className="task-desc">{task.description}</p>
      <p className="task-creatDate">Created at: {date[0]} | {hour[0]}</p>
      <button className="btn-update" onClick={() => setIsOpen(true)}>Update</button>
      <Modal isOpen={isOpen} setModalOpen={() => setIsOpen(!isOpen)}>
        <form className="form" onSubmit={updateTask}>
          <input
            type="text"
            placeholder="Title"
            className="input"
            ref={titleInput}
          />
          <textarea
            placeholder="Description"
            className="input"
            ref={descInput}
          />
          <button type="submit" className="btn-create-task">
            Update
          </button>
        </form>
      </Modal>
      <button className="btn-delete-task" onClick={deleteTask}>
        🗑
      </button>
    </div>
  )
}
