import { KpiCard } from "@/components/ui/kpi-card";

export default function DashboardPage() {
  return (
    <div className="w-full p-4">
      <section className="w-full">
        <div className="w-full space-y-1 leading-tight lg:flex-1">
          <p className="tracking-05px text-lg font-light text-gray-700">Olá</p>

          <h2 className="-tracking-025px text-4xl font-semibold">
            Richard Guedes
          </h2>

          <p className="font-light text-gray-700">
            Confira os status das suas tarefas
          </p>
        </div>

        <div className="no-scrollbar -ml-4 flex w-[calc(100%+32px)] items-center justify-start gap-4 overflow-x-auto px-4 py-6">
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
      </section>
    </div>
  );
}
