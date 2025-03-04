import { Badge } from "@/app/_components/ui/badge";
import Image from "next/image";
import TaskList from "../tasks/tasks-list";
import CreateTaskInput from "../_components/create-task-input";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="bg-[#0D0D0D] h-[250px]">
        <div className=" max-w-[763px] mx-auto">
          <div className="flex justify-center py-[87px]">
            <Image
              src={"/Logo.png"}
              alt="Logo"
              width={0}
              height={0}
              className="w-32"
              sizes="100vw"
            />
          </div>
          <CreateTaskInput />

          <div className="flex justify-between pt-20">
            <div className="flex items-center gap-3">
              <span className="text-blue">Tarefas concluidas</span>
              <Badge className="bg-[#333333] rounded-full">5</Badge>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-purple">Concluidas</span>
              <Badge className="bg-[#333333] rounded-full">2 de 5</Badge>
            </div>
          </div>
          <div className="mt-5">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}
