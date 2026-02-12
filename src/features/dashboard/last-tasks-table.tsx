"use client";

import { DataTable } from "@/components/ui/data-table";
import { LastTasksColumns, Task } from "./last-tasks-columns";

export function LastTasksTable() {
  const tasks: Task[] = [
    {
      id: "tsk-501",
      name: "Implement API Authentication with NextAuth",
      status: "in_progress",
      priority: "high",
      createdAt: new Date("2026-02-01T10:00:00Z"),
      dueDate: new Date("2026-02-15T18:00:00Z"),
      author: {
        name: "Guilherme Silva",
        avatarUrl: "https://github.com/guilherme.png",
      },
    },
    {
      id: "tsk-502",
      name: "Redesign Dashboard KPIs for Mobile",
      status: "todo",
      priority: "urgent",
      createdAt: new Date("2026-02-10T08:30:00Z"),
      dueDate: new Date("2026-02-11T12:00:00Z"),
      author: {
        name: "Ana Oliveira",
        avatarUrl: "https://i.pravatar.cc/150?u=ana",
      },
    },
    {
      id: "tsk-503",
      name: "Fix Sidebar Navigation Glitch on Safari",
      status: "done",
      priority: "medium",
      createdAt: new Date("2026-01-25T14:20:00Z"),
      dueDate: new Date("2026-01-30T17:00:00Z"),
      author: {
        name: "Lucas Santos",
        avatarUrl: "",
      },
    },
    {
      id: "tsk-504",
      name: "Quarterly Performance Report - Q1",
      status: "backlog",
      priority: "low",
      createdAt: new Date("2026-02-05T09:00:00Z"),
      dueDate: new Date("2026-03-30T23:59:59Z"),
      author: {
        name: "Mariana Costa",
        avatarUrl: "https://i.pravatar.cc/150?u=mariana",
      },
    },
  ];

  return (
    <div className="card w-full space-y-6">
      <div className="flex w-full items-center justify-between gap-2">
        <h1 className="card-title text-lg">Lista de Tarefas</h1>

        <button className="text-sm leading-tight font-light text-purple-500 capitalize">
          ver todas
        </button>
      </div>

      <DataTable columns={LastTasksColumns} data={tasks} searchKey="name" />
    </div>
  );
}
