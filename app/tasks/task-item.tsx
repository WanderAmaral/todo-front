import { Trash2 } from "lucide-react";
import { Card, CardContent } from "../_components/ui/card";
import { Checkbox } from "../_components/ui/checkbox";
import { Label } from "../_components/ui/label";
import { Task } from "../type/task";
import { Button } from "../_components/ui/button";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <Card className="bg-[#262626] border-zinc-600">
      <CardContent>
        <div className="flex justify-between items-center">
          <Checkbox className="border-blue rounded-full" id="terms" />
          <Label className="text-white">{task.title}</Label>
          <Button variant={"ghost"}>
            <Trash2 className="text-zinc-400" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
