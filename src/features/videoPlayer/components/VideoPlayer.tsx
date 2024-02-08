import { Collection } from "./Collection/Collection";
import { CurrentVideo } from "./CurrentVideo/CurrentVideo";
import { Item } from "./Item/Item";
import { List } from "./List/List";

interface IVideoPlayerParams {
  id: string;
  children: React.ReactNode;
  handleClick?: () => void;
}
export function VideoPlayer({
  id,
  children,
  handleClick,
}: Readonly<IVideoPlayerParams>) {
  return (
    <div data-testid={id}>
      <main className="relative flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:flex-row md:pr-80">
        {children}
      </main>
    </div>
  );
}

VideoPlayer.CurrentVideo = CurrentVideo;
VideoPlayer.Collection = Collection;
VideoPlayer.List = List;
VideoPlayer.Item = Item;
export default VideoPlayer;
