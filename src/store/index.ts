import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

// Ejemplo de cómo definir la interfaz de mi estado global manualmente
/* export interface GlobalState {
  todo: {
    list: string[];
  };
}
 */

// Creamos un pedazo de estado (slice)
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: ["study", "judo", "gym"],
  },
  // En reducers, se declaran las aciones se pueden ejecutar
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
      console.log(action);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions;

/**
 * 1. typeof store.getState: typeof se utiliza para obtener el tipo de la expresión
 * que le sigue, en este caso el tipo de store.getState
 * 2. ReturnType<...>: se emplea para obtener el tipo de retorno de una función,
 * en este caso de store.getState.
 */
export type GlobalState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector;
