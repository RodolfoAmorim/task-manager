import Link from "next/link";
import { ElementType } from "react";

interface SidebarLinkProps {
  icon: ElementType;
  name: string;
  link: string;
  active?: boolean;
}

export function SidebarLink({
  icon: Icon,
  name,
  link,
  active,
}: SidebarLinkProps) {
  return (
    <li className="w-full">
      <Link
        href={link}
        className={`relative flex w-full items-center justify-start gap-3 py-2 text-gray-700 before:absolute before:top-1/2 before:left-0 before:size-1.5 before:-translate-y-1/2 before:rounded-full ${active ? "pl-4 text-purple-600 before:bg-purple-600" : ""} lg:justify-start lg:pl-5`}
      >
        <Icon className="size-5 min-w-5" />

        <span className="group-data-[open=false]delay-300 w-0 overflow-hidden transition-all duration-150 group-data-[open=true]:w-40">
          {name}
        </span>
      </Link>
    </li>
  );
}
