import { Sidebar } from "@/components/sidebar/sidebar";
import { AlignLeftIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="relative flex min-h-svh w-full items-start justify-start bg-white">
      <Sidebar />

      <div className="h-svh flex-1 rounded-3xl border-8 border-white bg-gray-200">
        <header className="p-5">
          <h1>Header</h1>
        </header>
      </div>
    </main>
  );
}
