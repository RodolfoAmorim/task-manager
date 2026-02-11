export function RecentActivitiesCard() {
  return (
    <div className="card flex w-full flex-col items-start justify-between gap-6">
      <div className="flex w-full items-center justify-between gap-2">
        <h3 className="card-title text-lg">Carga de Trabalho</h3>

        <button className="text-sm leading-tight font-light text-purple-500 capitalize">
          ver todas
        </button>
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-start gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex w-full items-center justify-between gap-2 font-light text-gray-800"
          >
            <span className="bg-error inline-block size-2 rounded-full" />
            <p>Fix: Correção de download</p>
            <span className="block flex-1 border-t border-dashed border-gray-400" />
            <p className="text-sm">14 Jan</p>
          </div>
        ))}
      </div>
    </div>
  );
}
