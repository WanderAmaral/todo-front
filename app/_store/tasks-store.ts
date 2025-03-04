import { create } from "zustand";
import { fetchUserTasks } from "../_http/get-task-user";
import { createUserTask } from "../_http/create-task";
import { Task } from "../type/task";
import { deleteTask } from "../_http/delete-task";

type TaskStore = {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (title: string, token: string) => Promise<void>;
  removeTask: (taskId: string) => void;
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
}));
