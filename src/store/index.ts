import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { player } from "../features/videoPlayer/store/slices/player.slice";

/**
 * Cada reducer es responsable de devolver su propio estado del slice
 */
export const store = configureStore({
  reducer: {
    player,
  },
});

/**
 * 1. typeof store.getState: typeof se utiliza para obtener el tipo de la expresión
 * que le sigue, en este caso el tipo de store.getState
 * 2. ReturnType<...>: se emplea para obtener el tipo de retorno de una función,
 * en este caso de store.getState.
 */
export type GlobalState = ReturnType<typeof store.getState>;

/**
 * useSelector es un hook de  React Redux para leer los datos del estado global
 * gestionado por Redux
 */
export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector;
