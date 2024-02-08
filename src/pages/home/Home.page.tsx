import { useNavigate } from "@tanstack/react-router";
import { useSearchQuery } from "@/modules/youtube/hooks";
import { Button } from "@/components/ui/button";
import { TResourceType } from "@/modules/youtube/types/common.types";
import { CRoutePath } from "@/routes/types/route-path";
import { useEffect } from "react";
import VideoPlayer from "@/features/videoPlayer/components/VideoPlayer";

export function HomePage() {
  const { data, updateSearchCondition } = useSearchQuery();
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

  const handleGetListDetails = () => {
    console.log("get details");
  };

  useEffect(() => {
    /* updateSearchCondition({
      type: "video",
    }); */
  }, []);

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
            {data?.items.map(({ id, snippet }, index: number) => (
              <VideoPlayer.List
                key={id.id}
                id={id.id}
                title={snippet.title}
                videoListIndex={index}
                videoListsCount={0}
                onClick={handleGetListDetails}
              >
                <VideoPlayer.Item
                  key={"#1"}
                  title={"Titulo"}
                  duration={"03:90s"}
                  onClick={() => {
                    console.log("clicked");
                  }}
                  isCurrent={false}
                />
              </VideoPlayer.List>
            ))}
          </VideoPlayer.Collection>
        </VideoPlayer>
      </div>
      {/* end */}
      <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-3">
        {data?.items.map(({ id, snippet }) => (
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
