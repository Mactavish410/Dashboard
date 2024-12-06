import React, { useEffect, useRef, useState } from "react";
import styles from "./ToDo.module.scss";

interface ToDoTasks {
  id: number;
  text: string;
  complited: boolean;
}

const ToDo = () => {
  const [tasks, setTasks] = useState<ToDoTasks[]>(() =>
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "deleted">("all");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleComplited = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, complited: !task.complited } : task
      )
    );
  };

  const addTask = () => {
    if (input === "") return;
    const id = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
    const newTask: ToDoTasks = {
      id: id,
      text: input,
      complited: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((tasks) => tasks.id !== id));
  };

  const filteredTasks = {
    all: tasks,
    completed: tasks.filter((task) => task.complited),
    deleted: tasks.filter((task) => !task.complited),
  }[filter];

  console.log(tasks);

  return (
    <section className={styles.todo_main}>
      <div>
        <input
          ref={inputRef}
          placeholder="Введите задачу"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <div>
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("completed")}>Выполненные</button>
      </div>
      <ul>
        {filteredTasks.map((item) => (
          <li onClick={() => handleComplited(item.id)} key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
          //   <ToDoItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default ToDo;
