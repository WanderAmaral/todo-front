import { create } from "zustand";
import { fetchUserTasks } from "../_http/get-task-user";
import { createUserTask } from "../_http/create-task";
import { Task } from "../type/task";
import { deleteTask } from "../_http/delete-task";
import { completeTask } from "../_http/complete-task";

type TaskStore = {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (title: string, token: string) => Promise<void>;
  removeTask: (taskId: string) => void;
  completeTask: (taskId: string) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  fetchTasks: async () => {
    try {
      const data: Task[] = await fetchUserTasks();
      set({ tasks: data });
    } catch (error) {
      console.error("Erro ao buscar tasks:", error);
    }
  },
  addTask: async (title, token) => {
    try {
      const newTask = await createUserTask(title, token);
      if (newTask) {
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      }
    } catch (error) {
      console.error("Erro ao adicionar task:", error);
    }
  },
  removeTask: async (taskId) => {
    try {
      await deleteTask(taskId);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }));
    } catch (error) {
      console.log(error);
    }
  },
  completeTask: async (taskId) => {
    try {
      const taskToUpdate = useTaskStore
        .getState()
        .tasks.find((task) => task.id === taskId);
  
      if (!taskToUpdate) return;
  
      const newCompletedStatus = !taskToUpdate.completed; 
  
      await completeTask(taskId, newCompletedStatus); 
  
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, completed: newCompletedStatus } : task
        ),
      }));
    } catch (error) {
      console.error("Erro ao completar a task:", error);
    }
  },
}));
