import { SearchIcon, BellIcon } from "lucide-react";
import { Button } from "./button";

export function Header() {
  return (
    <header className="flex items-center justify-end gap-4 py-4 pr-4 pl-20">
      <h1 className="flex-1 text-center text-xl font-semibold text-gray-900">
        Tansk
      </h1>

      <Button size={"icon"} variant={"ghost"}>
        <SearchIcon />
      </Button>

      <Button size={"icon"} variant={"ghost"}>
        <BellIcon />
      </Button>
    </header>
  );
}
