import { ChevronDown } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useAppSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { play } from "../../../store/slices/player";
import { VideoItem } from "./VideoItem";

interface IVideoListProps {
  moduleIndex: number;
  title: string;
  lessonsCount: number;
}

export function VideoList({
  moduleIndex,
  title,
  lessonsCount,
}: Readonly<IVideoListProps>) {
  const dispatch = useDispatch();

  const data = useAppSelector((state) => {
    const lessons = state.player.course.modules[moduleIndex].lessons;
    const { currentModuleIndex, currentLessonIndex } = state.player;
    return {
      lessons,
      currentModuleIndex,
      currentLessonIndex,
    };
  });

  const handleOnPlay = (moduleIndex: number, lessonIndex: number) => {
    dispatch(
      play({
        moduleIndex,
        lessonIndex,
      }),
    );
  };

  return (
    <div>
      <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
        <Collapsible.Trigger asChild>
          <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
            <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
              {moduleIndex + 1}
            </div>
            <div className="flex flex-col gap-1 text-left">
              <strong>{title}</strong>
              <span className="text-xs text-zinc-400">
                {lessonsCount} aulas
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-2xl ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <nav className="relative flex flex-col gap-4 p-6">
            {data.lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                data.currentModuleIndex === moduleIndex &&
                data.currentLessonIndex === lessonIndex;

              return (
                <VideoItem
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => handleOnPlay(moduleIndex, lessonIndex)}
                  isCurrent={isCurrent}
                />
              );
            })}
          </nav>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
