import { ChevronDown } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useAppSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player.slice";
import { VideoItem } from "./VideoItem";

interface IVideoListProps {
  videoListIndex: number;
  title: string;
  videoListsCount: number;
}

export function VideoList({
  videoListIndex,
  title,
  videoListsCount,
}: Readonly<IVideoListProps>) {
  const dispatch = useDispatch();

  const { videoItems, currentVideoListIndex, currentVideoIndex } =
    useAppSelector((state) => {
      const videoItems =
        state.player.collection?.videoLists[videoListIndex].videos;
      const {
        currentGroupIndex: currentVideoListIndex,
        currentElementIndex: currentVideoIndex,
      } = state.player;

      return {
        videoItems,
        currentVideoListIndex,
        currentVideoIndex,
      };
    });

  const handleOnPlay = (videoListIndex: number, videoIndex: number) => {
    dispatch(
      play({
        videoListIndex,
        videoIndex,
      }),
    );
  };

  return (
    <div>
      <Collapsible.Root className="group" defaultOpen={videoListIndex === 0}>
        <Collapsible.Trigger asChild>
          <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-sm">
              {videoListIndex + 1}
            </div>
            <div className="flex flex-col gap-1 text-left">
              <strong>{title}</strong>
              <span className="text-xs text-zinc-400">
                {videoListsCount} aulas
              </span>
            </div>
            <ChevronDown className="ml-auto h-5 w-5 text-2xl text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <nav className="relative flex flex-col gap-4 p-6">
            {videoItems?.map((video, videoIndex) => {
              const isCurrent =
                currentVideoListIndex === videoListIndex &&
                currentVideoIndex === videoIndex;

              return (
                <VideoItem
                  key={video.id}
                  title={video.title}
                  duration={video.duration}
                  onPlay={() => handleOnPlay(videoListIndex, videoIndex)}
                  isCurrent={isCurrent}
                />
              );
            })}
          </nav>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
