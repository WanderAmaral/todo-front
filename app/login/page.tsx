import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Entrar</h2>
        <form className="mt-4 space-y-4">
          <Input type="email" placeholder="E-mail" className="w-full" />
          <Input type="password" placeholder="Senha" className="w-full" />
          <Button className="w-full">Entrar</Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Não tem uma conta?
          <Link href={"/signup"} className="text-blue-600 hover:underline ml-2">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
