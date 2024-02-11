import { useNavigate } from "@tanstack/react-router";
import { useSearchQuery } from "@/modules/youtube/hooks";
import { Button } from "@/components/ui/button";
import { TResourceType } from "@/modules/youtube/types/common.type";
import { CRoutePath } from "@/routes/types/route-path";
import VideoPlayer from "@/features/videoPlayer/components/VideoPlayer";
import { usePlaylistDetailsQuery } from "@/modules/youtube/hooks/queries";
import { useDispatch } from "react-redux";
import { addGroup } from "@/features/videoPlayer/store/slices/player.slice";
import { IPlaylistItem } from "@/modules/youtube/types/playlist-items.type";
import { useEffect, useRef } from "react";

export function HomePage() {
  const dispatch = useDispatch();
  const currentPlaylistIdRef = useRef<string | null>(null);
  const { data: searchData, updateSearchCondition } = useSearchQuery();
  const { data: playlistDetailData, fetchPlaylistDetails } =
    usePlaylistDetailsQuery({
      isEnabled: false,
    });

  const navigate = useNavigate();
  const handleClickSearchVideo = ({ type }: { type: TResourceType }) => {
    updateSearchCondition({ type });
  };

  const handleViewDetails = (resourceId: string) => {
    navigate({
      to: CRoutePath.VIDEO_LIST,
      params: { id: resourceId },
    });
  };

  const handleGetListDetails = async (id: string) => {
    currentPlaylistIdRef.current = id;
    await fetchPlaylistDetails({ playlistId: id });
  };

  useEffect(() => {
    const playlistId = currentPlaylistIdRef.current;
    if (!playlistDetailData?.items.length || !playlistId) return;

    const elements = playlistDetailData?.items?.map((item: IPlaylistItem) => ({
      id: item.id,
      title: item.snippet.title,
      duration: "11:34",
    }));

    dispatch(
      addGroup({
        id: playlistId,
        title: playlistId,
        elements,
      }),
    );
  }, [playlistDetailData, dispatch]);

  return (
    <div className="flex w-full flex-col p-4">
      <div className="flex w-full justify-center gap-3 md:justify-normal">
        <Button
          variant="secondary"
          onClick={() =>
            handleClickSearchVideo({
              type: "video",
            })
          }
        >
          Buscar vídeo
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            handleClickSearchVideo({
              type: "playlist",
            })
          }
        >
          Buscar playlist
        </Button>
      </div>
      {/* start */}
      <div>
        <VideoPlayer id="player">
          <VideoPlayer.CurrentVideo />
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
                {playlistDetailData?.items.map(({ id, snippet }) => (
                  <VideoPlayer.Item
                    key={id}
                    title={snippet.title}
                    duration={"03:90s"}
                    onClick={() => {
                      console.log("clicked");
                    }}
                    isCurrent={false}
                  />
                ))}
              </VideoPlayer.List>
            ))}
          </VideoPlayer.Collection>
        </VideoPlayer>
      </div>
      {/* end */}
      <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-3">
        {searchData?.items.map(({ id, snippet }) => (
          <button
            key={snippet.thumbnails.default.url}
            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg"
            onClick={() => handleViewDetails(id.id)}
          >
            <img
              src={snippet.thumbnails.high.url}
              alt={snippet.title}
              className="w-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
