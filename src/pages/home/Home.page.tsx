import { useNavigate } from "@tanstack/react-router";
import { useSearchVideo } from "@/modules/youtube/hooks";
import { Button } from "@/components/ui/button";
import { TResourceType } from "@/modules/youtube/types";

export function HomePage() {
  const { data, updateSearchCondition } = useSearchVideo();
  const navigate = useNavigate();
  const handleClickSearchVideo = ({ type }: { type: TResourceType }) => {
    updateSearchCondition({ type });
  };

  const handleViewDetails = () => {
    navigate({
      to: "/video-list/$id",
      params: { id: "1" },
    });
  };

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
      <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-3">
        {data?.items.map(({ snippet }) => (
          <button
            key={snippet.thumbnails.default.url}
            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg"
            onClick={handleViewDetails}
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
