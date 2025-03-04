"use client";

import { useEffect } from "react";
import TaskItem from "./task-item";
import { useTaskStore } from "../_store/tasks-store";

const TaskList = () => {
  const { tasks, fetchTasks } = useTaskStore();
  
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
