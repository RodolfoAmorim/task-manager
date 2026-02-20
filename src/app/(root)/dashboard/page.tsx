import { StackedBarChart } from "@/components/charts/stacked-bar-chart";
import { KpiCard } from "@/components/ui/kpi-card";
import { LastTasksTable } from "@/features/dashboard/last-tasks-table";
import { PriorityTasksChart } from "@/features/dashboard/priority-tasks-card";
import { RecentActivitiesCard } from "@/features/dashboard/recent-activities-card";
import { WorkloadCard } from "@/features/dashboard/workload-card";

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
        <div className="w-full lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="w-full space-y-1 leading-tight lg:w-auto lg:flex-1 xl:max-w-fit xl:flex-auto">
            <p className="tracking-05px text-lg font-light text-gray-700 xl:text-2xl">
              Olá
            </p>

            <h2 className="-tracking-025px text-4xl font-semibold xl:text-5xl">
              Richard Guedes
            </h2>

            <p className="font-light text-gray-700">
              Confira os status das suas tarefas
            </p>
          </div>

          <div className="no-scrollbar -ml-4 flex w-[calc(100%+32px)] items-center justify-start gap-6 overflow-x-auto px-4 py-6 lg:w-auto lg:max-w-fit xl:max-w-none xl:flex-1">
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

        <div className="flex w-full flex-col items-center justify-start gap-6 xl:flex-row">
          <div className="w-full xl:max-w-219">
            <StackedBarChart
              title="Tarefas por mês"
              legendA="Completas"
              legendB="Restantes"
              data={data}
            />
          </div>

          <div className="flex w-full flex-col items-center justify-start gap-6 xl:w-auto xl:flex-1">
            <WorkloadCard />

            <RecentActivitiesCard />
          </div>
        </div>

        <div className="mt-6 w-full space-y-6 xl:flex xl:items-stretch xl:justify-between xl:gap-6 xl:space-y-0">
          <LastTasksTable />

          <PriorityTasksChart />
        </div>
      </section>
    </div>
  );
}
