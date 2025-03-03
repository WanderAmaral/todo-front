export interface Task {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
  userId?: string;
}
