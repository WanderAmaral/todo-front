"use client";

import { CirclePlus, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/_components/ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../_store/auth-store";
import { useTaskStore } from "../_store/tasks-store";
import { redirect } from "next/navigation";

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Por favor digite uma tarefa.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const CreateTaskInput = () => {
  const { token } = useAuthStore();
  const { addTask } = useTaskStore();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    try {
      await addTask(data.title, token);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangedAccount = () => {
    redirect("/login");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Tarefa"
                      className="bg-[#262626] p-6 border-none text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="p-6 bg-blue-dark">
              Criar <CirclePlus />
            </Button>
            <Button type="button" onClick={handleChangedAccount} className="p-6 bg-blue-dark">
              Trocar de conta <LogIn />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CreateTaskInput;
