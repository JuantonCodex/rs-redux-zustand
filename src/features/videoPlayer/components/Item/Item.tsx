import { PlayCircle, Video } from "lucide-react";

interface IItemProps {
  title: string;
  duration: string;
  onClick?: () => void;
  isCurrent?: boolean;
}

export function Item({
  title,
  duration,
  onClick,
  isCurrent = false,
}: Readonly<IItemProps>) {
  return (
    <button
      data-active={isCurrent}
      onClick={onClick}
      disabled={isCurrent}
      className="flex gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
    >
      <span className="h-4 w-4 min-w-4">
        {isCurrent ? (
          <PlayCircle className="h-full w-full text-emerald-400" />
        ) : (
          <Video className="h-full w-full text-zinc-500" />
        )}
      </span>

      <span className="overflow-hidden text-ellipsis whitespace-nowrap text-left text-xs">
        {title}
      </span>
      <span className="ml-auto text-left font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
