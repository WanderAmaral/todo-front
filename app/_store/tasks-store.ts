import { create } from "zustand";
import { fetchUserTasks } from "../_http/get-task-user";
import { createUserTask } from "../_http/create-task";
import { Task } from "../type/task";

type TaskStore = {
  tasks: Task[];
  fetchTasks: () => Promise<void>;
  addTask: (title: string, token: string) => Promise<void>;
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
}));
