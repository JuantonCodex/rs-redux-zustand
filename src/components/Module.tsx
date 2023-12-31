import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";

interface IModuleProps {
  moduleIndex: number;
  title: string;
  lessonsCount: number;
}

export function Module({ moduleIndex, title, lessonsCount }: IModuleProps) {
  return (
    <div>
      <Collapsible.Root className="group">
        <Collapsible.Trigger asChild>
          <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
            <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
              {moduleIndex + 1}
            </div>
            <div className="flex flex-col gap-1 text-left">
              <strong>{title}</strong>
              <span className="text-xs text-zinc-400">
                {lessonsCount} aulas
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-2xl ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <nav className="relative flex flex-col gap-4 p-6">
            <Lesson title="Fundamentos do Redux" duration="09:13" />
            <Lesson title="Fundamentos do Redux" duration="09:13" />
            <Lesson title="Fundamentos do Redux" duration="09:13" />
          </nav>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
