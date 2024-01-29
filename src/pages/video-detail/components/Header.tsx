import { useVideoPlayer } from "../../../features/videoPlayer/hooks";

export function Header() {
  const { currentVideo, currentVideoList } = useVideoPlayer();

  if (!currentVideo || !currentVideoList) return null;
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentVideo.title}</h1>
      <span className="text-sm text-zinc-400">{currentVideoList.title}</span>
    </div>
  );
}
