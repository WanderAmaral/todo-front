import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Cadastre-se
        </h2>
        <form className="mt-4 space-y-4">
          <Input type="email" placeholder="Nome" className="w-full" />
          <Input type="email" placeholder="E-mail" className="w-full" />
          <Input type="password" placeholder="Senha" className="w-full" />
          <Button type="button" className="w-full">Criar conta</Button>
        </form>
      </div>
    </div>
  );
}
