import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//import { IPlayerState } from "../../interfaces";
import { TActions, IPlayerState } from "./player.type";
/**
 * Porción del estado global.
 * Forma de organizar el código relacionado a una funcionalidad o dominio de datos
 * Contiene un reducer, que gestiona como el estado del slice evoluciona en
 * respuesta a las acciones.
 * Se puede agregar acciones y selectores
 */

const defaultState: IPlayerState = {
  collection: null,
  currentGroupIndex: 0,
  currentElementIndex: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState: defaultState,
  reducers: {
    addGroup: (state, action: PayloadAction<TActions["addGroup"]>) => {
      if (state.collection?.groups?.find(({ id }) => id === action.payload.id))
        return;

      state.collection = {
        ...state.collection,
        groups: [...(state.collection?.groups ?? []), action.payload],
      };
    },
    play: (state, action: PayloadAction<TActions["play"]>) => {
      state.currentGroupIndex = action.payload.groupIndex;
      state.currentElementIndex = action.payload.elementIndex;
    },
    next: (state) => {
      const nextVideoIndex = state.currentElementIndex + 1;
      const nextVideo =
        state.collection?.groups[state.currentGroupIndex].elements[
          nextVideoIndex
        ];

      if (nextVideo) {
        state.currentElementIndex = nextVideoIndex;
      } else if (state.collection?.groups[state.currentGroupIndex + 1]) {
        state.currentGroupIndex += 1;
        state.currentElementIndex = 0;
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

export const { play, next, addGroup } = playerSlice.actions;
