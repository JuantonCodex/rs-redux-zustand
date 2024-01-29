import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPlayerState, TActions } from "../../interfaces";
/**
 * Porción del estado global.
 * Forma de organizar el código relacionado a una funcionalidad o dominio de datos
 * Contiene un reducer, que gestiona como el estado del slice evoluciona en
 * respuesta a las acciones.
 * Se puede agregar acciones y selectores
 */

const defaultState: IPlayerState = {
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState: defaultState,
  reducers: {
    play: (state, action: PayloadAction<TActions["play"]>) => {
      state.currentModuleIndex = action.payload.moduleIndex;
      state.currentLessonIndex = action.payload.lessonIndex;
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[
          nextLessonIndex
        ];

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else if (state.course?.modules[state.currentModuleIndex + 1]) {
        state.currentModuleIndex += 1;
        state.currentLessonIndex = 0;
      }
    },
  },
});

export const initialState = playerSlice.getInitialState();

/**
 * playerSlice.reducer, función pura que retorna el estado actual de una parte
 * del store, en este caso el estado del slice y una acción.
 */
export const player = playerSlice.reducer;

export const { play, next } = playerSlice.actions;
