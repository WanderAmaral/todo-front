"use client";

import { useEffect, useMemo } from "react";
import TaskItem from "./task-item";
import { useTaskStore } from "../_store/tasks-store";
import { Badge } from "../_components/ui/badge";

const TaskList = () => {
  const { tasks, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskLength = useMemo(() => tasks.length, [tasks]);
  const taskCompleted = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  return (
    <>
      <div className="flex justify-between pt-20 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-blue">Tarefas concluidas</span>
          <Badge className="bg-[#333333] rounded-full">{taskCompleted}</Badge>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-purple">Concluidas</span>
          <Badge className="bg-[#333333] rounded-full">
            {taskCompleted} de {taskLength}
          </Badge>
        </div>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
