import { SearchIcon, BellIcon } from "lucide-react";
import { Button } from "./button";
import { Input } from "../form/input";
import { Avatar } from "./avatar";

export function Header() {
  return (
    <header className="flex items-center justify-end gap-4 py-4 pr-4 pl-20 lg:gap-4 lg:px-6">
      <div className="hidden items-center justify-start gap-6 lg:flex lg:flex-1">
        <Input.Root className="max-w-60">
          <Input.Icon icon={SearchIcon} />
          <Input.Field
            type="text"
            id="search"
            name="search"
            placeholder="Buscar"
          />
        </Input.Root>

        <div
          className={
            "text-success bg-success/10 inline-flex items-center gap-2 rounded-lg px-2 py-1"
          }
        >
          <span className="size-2 rounded-full bg-current" />

          <span className="text-xs tracking-wider">Disponível</span>
        </div>
      </div>

      <h1 className="flex-1 text-center text-xl font-semibold text-gray-900 lg:hidden">
        Tansk
      </h1>

      <Button size={"icon"} variant={"ghost"} className="lg:hidden">
        <SearchIcon />
      </Button>

      <Button
        size={"icon"}
        variant={"ghost"}
        className="lg:size-10 lg:rounded-full"
      >
        <BellIcon />
      </Button>

      <div className="hidden items-center justify-center rounded-full bg-white p-0.5 lg:flex">
        <div className="flex items-center">
          <Avatar
            name="Ana Caroline"
            className="z-4 size-10 border-2 border-white bg-purple-500"
          />
          <Avatar
            name="Ana Caroline"
            className="z-3 -ml-4 size-10 border-2 border-white bg-purple-400"
          />
          <Avatar
            name="Ana Caroline"
            className="z-2 -ml-4 size-10 border-2 border-white bg-purple-300"
          />
          <Avatar
            name="Ana Caroline"
            className="z-1 -ml-4 size-10 border-2 border-white bg-purple-200"
          />
        </div>

        <span className="inline-block pr-4 pl-1 text-gray-700">+3</span>
      </div>

      <Button size={"sm"} className="hidden lg:flex">
        Convidar
      </Button>
    </header>
  );
}
