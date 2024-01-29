import { useAppSelector } from "../../../store";
import { ILesson, IModule } from "../interfaces";

interface IReturn {
  currentModule: IModule | undefined;
  currentLesson: ILesson | undefined;
}
export const useVideoPlayer = (): IReturn => {
  const { currentModule, currentLesson } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player;

    const currentModule = state.player.course?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];
    console.log("currentModule", currentModule, currentLesson);

    return { currentModule, currentLesson };
  });

  return {
    currentModule,
    currentLesson,
  };
};
