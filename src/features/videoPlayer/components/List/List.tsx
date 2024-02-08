import { ChevronDown } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

interface IListProps {
  id: string;
  videoListIndex: number;
  title: string;
  videoListsCount: number;
  children: React.ReactNode;
  onClick?: () => void;
}

export function List({
  id,
  videoListIndex,
  title,
  videoListsCount,
  children,
  onClick,
}: Readonly<IListProps>) {
  return (
    <Collapsible.Root className="group" defaultOpen={false} data-testid={id}>
      <Collapsible.Trigger asChild onClick={onClick}>
        <button className="flex w-full gap-3 bg-zinc-800 p-4">
          <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
            {videoListIndex + 1}
          </div>
          <div className="flex flex-col gap-1 overflow-hidden whitespace-nowrap text-left">
            <strong>{title}</strong>
            <span className="text-xs text-zinc-400">
              {videoListsCount} vídeos
            </span>
          </div>
          <ChevronDown className="ml-auto h-5 w-5 min-w-5 text-2xl text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">{children}</nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
