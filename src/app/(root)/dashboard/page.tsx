import { StackedBarChart } from "@/components/charts/stacked-bar-chart";
import { KpiCard } from "@/components/ui/kpi-card";

const data = [
  { name: "Jan", valueA: 5, valueB: 10 },
  { name: "Fev", valueA: 23, valueB: 2 },
  { name: "Mar", valueA: 15, valueB: 5 },
  { name: "Abr", valueA: 5, valueB: 5 },
  { name: "Mai", valueA: 12, valueB: 9 },
  { name: "Jun", valueA: 14, valueB: 11 },
  { name: "Jul", valueA: 1, valueB: 0 },
  { name: "Ago", valueA: 2, valueB: 1 },
  { name: "Set", valueA: 6, valueB: 3 },
  { name: "Out", valueA: 20, valueB: 1 },
  { name: "Nov", valueA: 19, valueB: 5 },
  { name: "Dez", valueA: 16, valueB: 10 },
];

export default function DashboardPage() {
  return (
    <div className="w-full p-4">
      <section className="w-full">
        <div className="w-full">
          <div className="w-full space-y-1 leading-tight lg:flex-1">
            <p className="tracking-05px text-lg font-light text-gray-700">
              Olá
            </p>

            <h2 className="-tracking-025px text-4xl font-semibold">
              Richard Guedes
            </h2>

            <p className="font-light text-gray-700">
              Confira os status das suas tarefas
            </p>
          </div>

          <div className="no-scrollbar -ml-4 flex w-[calc(100%+32px)] items-center justify-start gap-6 overflow-x-auto px-4 py-6">
            <KpiCard
              title="Tarefas Pendentes"
              value={21}
              total={50}
              subLabel="Pendentes"
            />

            <KpiCard
              title="Em Progresso"
              value={2}
              total={21}
              subLabel="Em Progresso"
            />

            <KpiCard
              title="Tarefas Pendentes"
              value={4}
              total={50}
              subLabel="Pendentes"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-start gap-6">
          <StackedBarChart
            title="Tarefas por mês"
            legendA="Completas"
            legendB="Restantes"
            data={data}
          />
        </div>
      </section>
    </div>
  );
}
