import { useSearchVideo } from "../../modules/youtube/hooks";
import { Button } from "../../shared/components/Button";

export function Home() {
  const { data, refetch } = useSearchVideo();

  const handleClickSearchVideo = () => {
    refetch();
  };

  console.log("validando", data);
  return (
    <div className="flex w-full flex-col p-4">
      <div className="w-full">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickSearchVideo}
        >
          Buscar Vídeos
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {data?.items.map(({ snippet }) => (
          <div
            key={snippet.thumbnails.default.url}
            className="flex items-center justify-center overflow-hidden rounded-lg"
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
