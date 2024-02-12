import { useVideoPlayer } from "../../../features/videoPlayer/hooks";

export function Header() {
  const { currentElement, currentGroup } = useVideoPlayer();

  if (!currentElement || !currentGroup) return null;
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentElement.title}</h1>
      <span className="text-sm text-zinc-400">{currentGroup.title}</span>
    </div>
  );
}
