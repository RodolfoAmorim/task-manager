import { Progress } from "@/components/ui/progress";
import { ChevronDownIcon } from "lucide-react";

export function WorkloadCard() {
  return (
    <div className="card flex w-full flex-col items-start justify-between gap-6">
      <div className="flex w-full items-center justify-between gap-2">
        <h3 className="card-title text-lg">Carga de Trabalho</h3>

        <button className="tracking-05px flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-2 py-0.5 text-sm leading-tight font-medium text-gray-700">
          essa semana <ChevronDownIcon />
        </button>
      </div>

      <Progress value={50} height={35} color={"var(--color-purple-700)"} />

      <div className="flex w-full items-center justify-between gap-2 text-sm font-light text-gray-700">
        <p>Tarefas realizadas</p>
        <p>29/50</p>
      </div>
    </div>
  );
}
