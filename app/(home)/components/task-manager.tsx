import CreateTaskInput from "@/app/_components/create-task-input";
import TaskList from "@/app/tasks/tasks-list";
import Image from "next/image";

const TaskManeger = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#0D0D0D] h-[250px]">
        <div className="max-w-[763px] mx-auto h-full items-center flex flex-col justify-around">
          <div className="flex justify-center">
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
        </div>
        <div className=" max-w-[763px] mx-auto">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskManeger;
