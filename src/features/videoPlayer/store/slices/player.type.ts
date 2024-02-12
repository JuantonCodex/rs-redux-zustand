/* Actions */
export type TActions = {
  addGroup: IGroup;
  play: { groupIndex: number; elementIndex: number };
  next: () => void;
};

/* State */
export interface IElement {
  id: string;
  title: string;
  duration: string;
}

export interface IGroup {
  id: string;
  title: string;
  elements: IElement[];
}

export interface ICollection {
  groups: IGroup[];
}

export interface IPlayerState {
  collection: ICollection | null;
  currentGroupIndex: number;
  currentElementIndex: number;
}
