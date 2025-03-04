import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface DialogAddTaskProps {
  icon?: React.ReactNode;
  children?: string;
}

const DialogAddTask = ({ icon, children }: DialogAddTaskProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-6 bg-blue-dark">{children} {icon}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Criar Task</DialogTitle>
        <DialogDescription>Adiciona uma nova tarefa</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddTask;
