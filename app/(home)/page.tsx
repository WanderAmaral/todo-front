import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default async function Home() {
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

          <div className="flex gap-4 w-full items-center">
            <Input
              placeholder="Adicione uma nova tarefa"
              className="bg-[#262626] p-6 border-none"
            />
            <Button className="p-6 bg-blue-dark">
              Criar <CirclePlus />
            </Button>
          </div>

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
        </div>
      </div>
    </div>
  );
}
