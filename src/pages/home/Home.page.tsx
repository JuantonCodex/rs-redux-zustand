import { useNavigate } from "@tanstack/react-router";
import { useSearchVideo } from "../../modules/youtube/hooks";
import { Button } from "../../shared/components/Button";

export function Home() {
  const { data, updateSearchCondition } = useSearchVideo();
  const navigate = useNavigate();
  const handleClickSearchVideo = (type: string) => {
    updateSearchCondition({ type });
  };

  const handleViewDetails = () => {
    navigate({
      to: "/video",
      params: {
        id: 1,
      },
    });
  };

  return (
    <div className="flex w-full flex-col p-4">
      <div className="w-full">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClickSearchVideo("video")}
        >
          Buscar Vídeos
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleClickSearchVideo("playlist")}
        >
          Buscar Playlist
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {data?.items.map(({ snippet }) => (
          <div
            key={snippet.thumbnails.default.url}
            className="flex items-center justify-center overflow-hidden rounded-lg"
            onClick={handleViewDetails}
          >
            <img
              src={snippet.thumbnails.high.url}
              alt={snippet.title}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
