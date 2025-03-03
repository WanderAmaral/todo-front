"use client";

import { useEffect, useState } from "react";
import { fetchUserTasks } from "../_http/get-task-user";
import TaskItem from "./task-item";
import { Task } from "../type/task";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const data: Task[] = await fetchUserTasks();
      if (data) {
        setTasks(data);
      }
      console.log(data);
    };

    getTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
