import ReactPlayer from "react-player";

interface IVideoProps {
  url: string;
  onNext?: () => void;
}

export function VideoPlayer({ url, onNext }: Readonly<IVideoProps>) {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={onNext}
        url={url}
      />
    </div>
  );
}
