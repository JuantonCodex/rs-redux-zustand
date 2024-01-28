import { Header } from "../../shared/components/Header";
import { VideoPlayer } from "../../shared/components/VideoPlayer/VideoPlayer";
import { MessageCircle } from "lucide-react";
import { useAppSelector } from "../../store";
import { SEOHead } from "../../shared/components/SEOHead";
import { useVideo } from "../../hooks";
import { Button } from "../../shared/components/Button/Button";
import { VideoList } from "../../features/videoPlayer/components/VideoList";
import { useDispatch } from "react-redux";
import { next } from "../../store/slices/player";

export function VideoDetail() {
  const dispatch = useDispatch();
  const { currentLesson } = useVideo();
  const modules = useAppSelector((state) => {
    return state.player.course.modules;
  });

  const handleOnNextVideo = () => {
    dispatch(next());
  };

  return (
    <div className="flex h-screen items-start justify-center bg-zinc-950 p-4 text-zinc-50">
      <SEOHead
        title={`Assistindo: ${currentLesson.title}`}
        description={currentLesson.title}
      />
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
            <VideoPlayer
              url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
              onNext={handleOnNextVideo}
            />
          </div>
          <aside className="bottom-0 right-0 top-0 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 tablet:absolute tablet:w-80">
            {modules.map(({ id, title, lessons }, index) => (
              <VideoList
                key={id}
                moduleIndex={index}
                title={title}
                lessonsCount={lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  );
}
