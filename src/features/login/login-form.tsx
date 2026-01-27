import { Input } from "@/components/form/input";
import { Button } from "@/components/ui/button";
import { EyeOff, Lock, User2 } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  return (
    <form action="" className="w-full">
      <div className="w-full space-y-6">
        <Input.Root>
          <Input.Icon icon={User2} />
          <Input.Field
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
          />
        </Input.Root>

        <Input.Root>
          <Input.Icon icon={Lock} />
          <Input.Field
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
          />
          <Input.Action>
            <EyeOff />
          </Input.Action>
        </Input.Root>
      </div>

      <div className="mt-3 inline-block w-full text-right">
        <Link href="/login" className="tracking-05px text-purple-600">
          esqueci minha senha
        </Link>
      </div>

      <Button type="button" className="mt-10 w-full">
        Entrar
      </Button>
    </form>
  );
}
