"use client";

import CreateTaskInput from "@/app/_components/create-task-input";
import TaskList from "@/app/tasks/tasks-list";
import Image from "next/image";

const TaskManeger = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#0D0D0D] h-[250px]">
        <div className=" max-w-[763px] mx-auto">
          <div className="flex justify-center py-[40px]">
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

          <div className="mt-5">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManeger;
