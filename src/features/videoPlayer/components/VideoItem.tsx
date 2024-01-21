import { PlayCircle, Video } from "lucide-react";

interface IVideoItemProps {
  title: string;
  duration: string;
  onPlay: () => void;
  isCurrent?: boolean;
}

export function VideoItem({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: Readonly<IVideoItemProps>) {
  return (
    <button
      data-active={isCurrent}
      onClick={onPlay}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm data-[active=true]:text-emerald-400 text-zinc-400 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <PlayCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <Video className="w-4 h-4 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
