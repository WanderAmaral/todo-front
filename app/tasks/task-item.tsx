import { Trash2 } from "lucide-react";
import { Card, CardContent } from "../_components/ui/card";
import { Checkbox } from "../_components/ui/checkbox";
import { Label } from "../_components/ui/label";
import { Task } from "../type/task";
import { Button } from "../_components/ui/button";
import { useTaskStore } from "../_store/tasks-store";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { removeTask, completeTask } = useTaskStore();

  return (
    <Card className="bg-[#262626] border-zinc-600">
      <CardContent>
        <div className="flex justify-between items-center">
          <Checkbox
            checked={task.completed}
            onClick={() => completeTask(task.id)}
            className="border-blue rounded-full h-5 w-5"
            id={`task-${task.id}`}
          />
          <Label
            className={`text-white ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </Label>
          <Button onClick={() => removeTask(task.id)} variant={"ghost"}>
            <Trash2 className="text-zinc-400 hover:text-black" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
