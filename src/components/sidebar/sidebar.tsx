"use client";

import Logo from "@/assets/images/logo.svg";
import { HomeIcon, BoltIcon, AlignLeftIcon } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { SidebarLink } from "./sidebar-link";
import { useState, useRef, MouseEvent } from "react";

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      handleToggleOpen(false);
    }
  };

  const handleToggleOpen = (value?: boolean) => {
    setOpen(value ?? !open);
  };

  return (
    <>
      <button
        type="button"
        className="lg: absolute top-4 left-4 z-20 lg:top-7 lg:left-24"
        onClick={() => handleToggleOpen()}
      >
        <AlignLeftIcon />
      </button>

      <aside
        data-open={open}
        className="group invisible absolute inset-0 z-10 bg-black/20 opacity-0 backdrop-blur-xs transition-all duration-300 ease-in-out data-[open=true]:visible data-[open=true]:opacity-100 lg:visible lg:relative lg:inset-auto lg:h-svh lg:w-24 lg:bg-transparent lg:opacity-100 lg:data-[open=true]:w-60"
        onClick={handleBackdropClick}
      >
        <div
          ref={sidebarRef}
          className="absolute inset-2 right-auto flex w-60 -translate-x-full flex-col items-start justify-start divide-y divide-gray-300 rounded-2xl bg-white p-4 shadow-md transition-all duration-300 ease-in-out group-data-[open=true]:translate-x-0 lg:relative lg:inset-0 lg:h-full lg:w-full lg:translate-x-0 lg:rounded-none lg:shadow-none"
        >
          <div className="flex w-full items-center justify-start gap-2 pb-4 lg:pl-4">
            <img
              src={Logo.src}
              alt="Tansk Logo"
              className="h-12 w-8 object-center"
            />

            <h1 className="text-xl font-semibold text-gray-900 lg:hidden">
              Tansk
            </h1>
          </div>

          <nav className="w-full flex-1 py-4">
            <ul className="flex w-full flex-col items-center justify-center gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <SidebarLink
                  key={i}
                  icon={HomeIcon}
                  name="Dashboard"
                  link="/dashboard"
                  active={i === 0}
                />
              ))}
            </ul>
          </nav>

          <ul className="flex w-full flex-col items-center justify-center gap-4 pt-4">
            <SidebarLink
              icon={BoltIcon}
              name="Configurações"
              link="/settings"
            />

            <li className="flex w-full items-center justify-start gap-4">
              <Avatar name="Administrador" />

              <span className="lg:hidden">Administrador</span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
