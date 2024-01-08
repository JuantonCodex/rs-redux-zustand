import { useAppSelector } from "../store";

export function Header() {
  const { moduleTitle, lessonTitle } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course.modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return {
      moduleTitle: currentModule.title,
      lessonTitle: currentLesson.title,
    };
  });

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{lessonTitle}</h1>
      <span className="text-sm text-zinc-400">{moduleTitle}</span>
    </div>
  );
}
