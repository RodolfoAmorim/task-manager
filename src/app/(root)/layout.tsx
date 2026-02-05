import { Sidebar } from "@/components/sidebar/sidebar";
import { Header } from "@/components/ui/header";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-svh w-full items-start justify-start bg-white">
      <Sidebar />

      <div className="h-svh max-w-full flex-1 overflow-x-hidden rounded-3xl border-8 border-white bg-gray-200">
        <Header />

        {children}
      </div>
    </main>
  );
}
