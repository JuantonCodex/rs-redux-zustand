/* State */
export interface IPlayerState {
  course: ICourse | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
}
export interface ICourse {
  modules: IModule[];
}

export interface IModule {
  id: string;
  title: string;
  lessons: ILesson[];
}

export interface ILesson {
  id: string;
  title: string;
  duration: string;
}

/* Actions */
export type TActions = {
  play: { moduleIndex: number; lessonIndex: number };
  next: () => void;
};
