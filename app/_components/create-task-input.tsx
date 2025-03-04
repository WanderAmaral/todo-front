"use client";
import { CirclePlus } from "lucide-react";
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

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: "O titulo é obrigatório.",
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
    console.log("Token:", token);

    console.log(data.title);
    try {
      await addTask(data.title, token);
      form.reset();
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
          </div>
        </form>
      </Form>
    </>
  );
};

export default CreateTaskInput;
