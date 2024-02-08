import { useNavigate } from "@tanstack/react-router";
import { useSearch } from "@/modules/youtube/hooks";
import { Button } from "@/components/ui/button";
import { TResourceType } from "@/modules/youtube/types/common.types";
import { CRoutePath } from "@/routes/types/route-path";
import { useEffect } from "react";

export function HomePage() {
  const { data, updateSearchCondition } = useSearch();
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

  useEffect(() => {
    updateSearchCondition({
      type: "video",
    });
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
