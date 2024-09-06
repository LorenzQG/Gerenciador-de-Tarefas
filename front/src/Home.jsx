import { useState, useEffect, useRef } from "react";
import "./Home.css";
import "./reset.css";
import "./HomeMedia.css";
import Modal from "./components/Modal/Modal";
import ListTasks from "./components/ListTasks/listTasks";
import api from "./services/api";
export default function Home({ token, removeCookie }) {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const titleInput = useRef();
  const descInput = useRef();

  const [nome, setNome] = useState("");

  async function logout() {
    removeCookie("token");
  }

  async function getUser() {
    const response = await api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.status === 401) {
      removeCookie("token")
    }
    
    setNome(response.data.name);
  }

  async function getTasks() {
    const getTasks = await api.get("/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setTasks(getTasks.data);
  }

  async function postTasks(e) {
    e.preventDefault();
    const newTask = await api.post(
      "/tasks",
      {
        title: titleInput.current.value,
        description: descInput.current.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTasks((prevTasks) => [...prevTasks, newTask.data]);
    setIsOpen(false);
  }

  useEffect(() => {
    getTasks();
    getUser();
  }, []);

  const listTasks = tasks.map((task) => (
    <ListTasks key={task.id} task={task} setTasks={setTasks} />
  ));

  return (
    <>
      <header className="header">
        <h1 className="logo">Task Manager</h1>
        <div className="profile">
          <h3 className="user-name">Welcome {nome}</h3>
          <button className="btn-create-task" onClick={logout}>
            Logout
          </button>
        </div>
        <div>
          <button className="btn-create-task" onClick={() => setIsOpen(true)}>
            Create Task
          </button>
        </div>
        <Modal isOpen={isOpen} setModalOpen={() => setIsOpen(!isOpen)}>
          <form className="form" onSubmit={postTasks}>
            <input
              type="text"
              id="task-name"
              name="task-name"
              placeholder="Enter task name"
              required
              ref={titleInput}
            />
            <textarea
              id="task-description"
              name="task-description"
              placeholder="Enter task description"
              required
              ref={descInput}
            ></textarea>
            <button type="submit" className="btn-create-task">
              Create Task
            </button>
          </form>
        </Modal>
      </header>
      <main className="main">
        <h2>Your tasks</h2>
        <div className="container_tasks">
          {tasks.length === 0 ? (
            <h3 className="no-tasks">No tasks to show</h3>
          ) : (
            listTasks
          )}
        </div>
      </main>
    </>
  );
}
