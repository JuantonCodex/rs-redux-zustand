import { useSearchVideo } from "../modules/youtube/hooks";
import { Button } from "../shared/components/Button";

export function Home() {
  const { data, refetch } = useSearchVideo();

  const handleClickSearchVideo = () => {
    refetch();
  };

  console.log("validando", data);
  return (
    <div className="flex p-4 flex-col w-full">
      <div className="w-full">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickSearchVideo}
        >
          Buscar Vídeos
        </Button>
      </div>
      <div className="pt-4 grid grid-cols-3 gap-4">
        {data?.items.map(({ snippet }) => (
          <div
            key={snippet.thumbnails.default.url}
            className="flex justify-center items-center rounded-lg overflow-hidden"
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
