import { createSlice } from "@reduxjs/toolkit";

/**
 * Porción del estado global.
 * Forma de organizar el código relacionado a una funcionalidad o dominio de datos
 * Contiene un reducer, que gestiona como el estado del slice evoluciona en
 * respuesta a las acciones.
 * Se puede agregar acciones y selectores
 */
const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [
        {
          id: "1",
          title: "Iniciando com React",
          lessons: [
            { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
            {
              id: "w-DW4DhDfcw",
              title: "Estilização do Post",
              duration: "10:05",
            },
            {
              id: "D83-55LUdKE",
              title: "Componente: Header",
              duration: "06:33",
            },
            {
              id: "W_ATsETujaY",
              title: "Componente: Sidebar",
              duration: "09:12",
            },
            { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
            {
              id: "8KBq2vhwbac",
              title: "Form de comentários",
              duration: "11:34",
            },
          ],
        },
        {
          id: "2",
          title: "Estrutura da aplicação",
          lessons: [
            {
              id: "gE48FQXRZ_o",
              title: "Componente: Comment",
              duration: "13:45",
            },
            { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
            {
              id: "h5JA3wfuW1k",
              title: "Interações no JSX",
              duration: "06:33",
            },
          ],
        },
      ],
    },
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },
  reducers: {
    play: (state, action) => {
      state.currentModuleIndex = action.payload.moduleIndex;
      state.currentLessonIndex = action.payload.lessonIndex;
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex];

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else if (state.course.modules[state.currentModuleIndex + 1]) {
        state.currentModuleIndex += 1;
        state.currentLessonIndex = 0;
      }
    },
  },
});

/**
 * playerSlice.reducer, función pura que retorna el estado actual de una parte
 * del store, en este caso el estado del slice y una acción.
 */
export const player = playerSlice.reducer;

export const { play, next } = playerSlice.actions;
