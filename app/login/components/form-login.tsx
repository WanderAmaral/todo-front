"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/_http/login-user";
import Link from "next/link";

interface FormLoginProps {
  defaultValues?: FormSchema;
}

const formSchema = z.object({
  email: z.string().email({ message: "Email obrigatório" }),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
});

type FormSchema = z.infer<typeof formSchema>;

export default function FormLogin({ defaultValues }: FormLoginProps) {
  const route = useRouter();

  // const { token } = useAuthStore();

  // console.log(token);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues ?? {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    try {
      console.log({ data });
      await loginUser(data);
      form.reset();
      route.push(`/`);
      toast.error(`Bem vindo ${data.email}`);
    } catch (error) {
      console.error(error);
      form.reset();
      toast.error("Email ou senha está incorreto!");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Entrar</h2>
        <Form {...form}>
          <form
            className="mt-4 space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="E-mail" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Senha" className="w-full" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </Form>
        <span className="mt-4">
          Não tem uma conta?{" "}
          <Link
            href={"/signup"}
            className=" text-blue underline hover:text-blue-dark"
          >
            Cadastre-se
          </Link>
        </span>
      </div>
    </div>
  );
}
