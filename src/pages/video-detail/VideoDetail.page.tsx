import { Header } from "./components/Header";
import { MessageCircle } from "lucide-react";
import { useAppSelector } from "../../store";
import { SEOHead } from "../../shared/components/SEOHead";
import { useVideoPlayer } from "../../features/videoPlayer/hooks";
import { Button } from "../../shared/components/Button";
import { VideoList } from "../../features/videoPlayer/components/VideoList";
import { useDispatch } from "react-redux";
import { next } from "../../features/videoPlayer/store/slices/player";
import ReactPlayer from "react-player";

export function VideoDetail() {
  const dispatch = useDispatch();
  const { currentLesson } = useVideoPlayer();
  const pageTitle = currentLesson?.title || "";

  const modules = useAppSelector((state) => {
    return state.player.collection?.videoLists;
  });

  const handleOnNextVideo = () => {
    dispatch(next());
  };

  return (
    <div className="flex h-auto max-h-screen items-start justify-center bg-zinc-950 p-4 text-zinc-50">
      <SEOHead title={`${pageTitle}`} description={pageTitle} />
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <Button
            variant="contained"
            startIcon={<MessageCircle className="h-4 w-4 text-2xl" />}
          >
            Reportar incoveniente
          </Button>
        </div>
        <main className="relative flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow tablet:flex-row tablet:pr-80">
          <div className="flex-1">
            {currentLesson && (
              <div className="aspect-video w-full bg-zinc-950">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  playing
                  onEnded={handleOnNextVideo}
                  url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
                />
              </div>
            )}
          </div>
          <aside className="bottom-0 right-0 top-0 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 tablet:absolute tablet:w-80">
            {modules?.map(({ id, title, videos: lessons }, index) => (
              <VideoList
                key={id}
                videoListIndex={index}
                title={title}
                videoListsCount={lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
