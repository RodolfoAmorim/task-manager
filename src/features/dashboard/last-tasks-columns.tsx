"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format, isPast, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import { Avatar } from "@/components/ui/avatar";

export type Task = {
  id: string;
  name: string;
  status: "todo" | "in_progress" | "done" | "backlog";
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: Date;
  dueDate: Date;
  author: {
    name: string;
    avatarUrl?: string;
  };
};

export const LastTasksColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Task",
    cell: ({ row }) => <div className="min-w-56">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge variant={status === "done" ? "success" : "warning"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Prioridade",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string;
      const priorityMap: Record<string, { label: string; color: string }> = {
        low: { label: "Low", color: "text-gray-700 bg-gray-700/10" },
        medium: { label: "Medium", color: "text-gray-700 bg-gray-700/10" },
        high: { label: "High", color: "text-gray-700 bg-gray-700/10" },
        urgent: {
          label: "Urgent",
          color: "text-gray-700 bg-gray-700/10",
        },
      };
      const current = priorityMap[priority] || priorityMap.low;
      return (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-lg px-2 py-1",
            current.color,
          )}
        >
          <span className="size-2 rounded-full bg-current" />

          <span className="text-xs tracking-wider uppercase">
            {current.label}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Criado em",
    cell: ({ row }) => (
      <div className="min-w-28">
        {format(row.getValue("createdAt"), "MMM dd, yyyy")}
      </div>
    ),
  },
  {
    accessorKey: "dueDate",
    header: "Prazo",
    cell: ({ row }) => {
      const date = row.getValue("dueDate") as Date;
      const isOverdue =
        isPast(date) && !isToday(date) && row.original.status !== "done";

      return (
        <div className={cn(isOverdue ? "text-red-500" : "")}>
          {format(date, "MMM dd")}
          {isOverdue && <AlertCircle size={14} />}
        </div>
      );
    },
  },
  {
    accessorKey: "author",
    header: "Criado por",
    cell: ({ row }) => {
      const author = row.original.author;
      return (
        <div className="flex items-center gap-2">
          <Avatar name={author.name.substring(0, 2).toUpperCase()} />

          <span className="max-w-25 truncate text-sm text-zinc-600">
            {author.name}
          </span>
        </div>
      );
    },
  },
];
