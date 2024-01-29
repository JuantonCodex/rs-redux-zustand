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
  collection: null,
  currentVideoListIndex: 0,
  currentVideoIndex: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState: defaultState,
  reducers: {
    play: (state, action: PayloadAction<TActions["play"]>) => {
      state.currentVideoListIndex = action.payload.videoListIndex;
      state.currentVideoIndex = action.payload.videoIndex;
    },
    next: (state) => {
      const nextVideoIndex = state.currentVideoIndex + 1;
      const nextVideo =
        state.collection?.videoLists[state.currentVideoListIndex].videos[
          nextVideoIndex
        ];

      if (nextVideo) {
        state.currentVideoIndex = nextVideoIndex;
      } else if (
        state.collection?.videoLists[state.currentVideoListIndex + 1]
      ) {
        state.currentVideoListIndex += 1;
        state.currentVideoIndex = 0;
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
