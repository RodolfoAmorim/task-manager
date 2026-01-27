import Logo from "@/assets/images/logo.svg";
import { LoginForm } from "@/features/login/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative min-h-svh w-full overflow-hidden">
      <img
        src="/img/pattern.svg"
        alt=""
        style={{ minWidth: "4528px", height: "1528px" }}
        className="3xl:-right-166.75 absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90 object-fill md:top-auto md:bottom-0 md:translate-y-0 xl:top-1/2 xl:-right-10/12 xl:bottom-auto xl:left-auto xl:translate-x-0 xl:-translate-y-1/2 xl:rotate-0 2xl:-right-218.75"
      />

      <div className="absolute top-1/2 right-6 left-6 flex max-w-109.5 -translate-y-1/2 flex-col items-center justify-center gap-12 rounded-lg bg-white p-4 shadow-2xl md:right-0 md:left-1/2 md:-translate-x-1/2 xl:translate-x-1/3 2xl:shadow-none">
        <img
          src={Logo.src}
          alt="Tansk Logo"
          className="mt-6 h-12 w-24 object-center"
        />

        <div className="w-full space-y-2 text-center">
          <h1 className="-tracking-05px text-3xl leading-tight font-medium">
            Bem-Vindo ao Tansk
          </h1>

          <p className="tracking-025px text-lg font-light text-gray-600">
            Acesse para ver suas tarefas do dia!
          </p>
        </div>

        <div className="flex w-full flex-1 items-start justify-center">
          <LoginForm />
        </div>

        <p className="tracking-05px text-center text-purple-600">
          ainda não tem uma conta?{" "}
          <Link href="/login" className="underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  );
}
