import ReactPlayer from "react-player";

export function CurrentVideo() {
  return (
    <div className="flex-1">
      <div className="aspect-video w-full bg-zinc-950">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={() => {}}
          url={`https://www.youtube.com/watch?v=123`}
        />
      </div>
    </div>
  );
}
