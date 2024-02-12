import { useSearchQuery } from "@/modules/youtube/hooks";
import { Button } from "@/components/ui/button";
import { TResourceType } from "@/modules/youtube/types/common.type";
import VideoPlayer from "@/features/videoPlayer/components/VideoPlayer";
import { usePlaylistDetailsQuery } from "@/modules/youtube/hooks/queries";
import { useDispatch } from "react-redux";
import {
  addGroup,
  play,
} from "@/features/videoPlayer/store/slices/player.slice";
import { IPlaylistItem } from "@/modules/youtube/types/playlist-items.type";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store";
import { Search } from "lucide-react";

export function HomePage() {
  const dispatch = useDispatch();
  const { collection: storedCollection } = useAppSelector(
    (state) => state.player,
  );

  const [currentGroupId, setCurrentGroupId] = useState<string | null>(null);
  const [currentElementId, setCurrentElementId] = useState<string | null>(null);

  const { data: searchData, updateSearchCondition } = useSearchQuery();
  const { data: playlistDetailData, getPlaylistDetails } =
    usePlaylistDetailsQuery({
      isEnabled: false,
    });

  const handleClickSearchVideo = ({ type }: { type: TResourceType }) => {
    updateSearchCondition({ type });
  };

  const handleGetListDetails = (playlistId: string) => {
    if (playlistId === currentGroupId) return;
    console.log("run");
    setCurrentGroupId(playlistId);
    getPlaylistDetails({ playlistId });
  };

  const handlePlayVideo = (videoId: string) => {
    if (videoId === currentElementId) return;
    setCurrentElementId(videoId);
    dispatch(
      play({
        groupIndex: 1,
        elementIndex: 1,
      }),
    );
  };

  const findGroupElements = (id: string) => {
    return storedCollection?.groups.find((group) => group.id === id)?.elements;
  };

  useEffect(() => {
    if (!playlistDetailData?.items.length || !currentGroupId) return;
    const elements = playlistDetailData?.items?.map((item: IPlaylistItem) => ({
      id: item.contentDetails.videoId,
      title: item.snippet.title,
      duration: "11:34",
    }));

    console.log("effect success to dispatch");
    dispatch(
      addGroup({
        id: currentGroupId,
        title: currentGroupId,
        elements,
      }),
    );
  }, [playlistDetailData, dispatch, currentGroupId]);

  return (
    <div className="flex w-full flex-col pt-4 md:p-4">
      <div className="mb-3 flex w-full justify-center gap-3 md:justify-normal">
        {false && (
          <Button
            variant="secondary"
            disabled
            onClick={() =>
              handleClickSearchVideo({
                type: "video",
              })
            }
          >
            Buscar vídeo
          </Button>
        )}
        <Button
          variant="secondary"
          className="rounded-sm"
          onClick={() =>
            handleClickSearchVideo({
              type: "playlist",
            })
          }
        >
          <Search className="mr-2 h-4 w-4" />
          Buscar Listas de Judo
        </Button>
      </div>

      <div>
        <VideoPlayer id="player">
          <VideoPlayer.CurrentVideo currentVideoId={currentElementId ?? ""} />
          <VideoPlayer.Collection id="collection">
            {searchData?.items.map(({ id, snippet }, index: number) => (
              <VideoPlayer.List
                key={id.id}
                id={id.id}
                title={snippet.title}
                videoListIndex={index}
                videoListsCount={0}
                onClick={() => handleGetListDetails(id.id)}
              >
                {findGroupElements(id.id)?.map(
                  ({ id: videoId, title, duration }) => (
                    <VideoPlayer.Item
                      key={videoId}
                      title={title}
                      duration={duration}
                      onClick={() => handlePlayVideo(videoId)}
                      isCurrent={false}
                    />
                  ),
                )}
              </VideoPlayer.List>
            ))}
          </VideoPlayer.Collection>
        </VideoPlayer>
      </div>
    </div>
  );
}
