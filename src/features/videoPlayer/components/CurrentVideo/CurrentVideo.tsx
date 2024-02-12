import ReactPlayer from "react-player";

interface ICurrentVideoParams {
  currentVideoId: string;
}

export function CurrentVideo({ currentVideoId }: ICurrentVideoParams) {
  return (
    <div className="flex-1">
      <div className="aspect-video w-full bg-zinc-950">
        {!currentVideoId ? (
          <div className="h-full w-full bg-black" />
        ) : (
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            playing
            onEnded={() => {}}
            url={`https://www.youtube.com/watch?v=${currentVideoId}`}
          />
        )}
      </div>
    </div>
  );
}
