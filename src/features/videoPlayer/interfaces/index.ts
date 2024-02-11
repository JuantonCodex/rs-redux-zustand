/* State */
export interface IVideo {
  id: string;
  title: string;
  duration: string;
}

/* Actions */
export type TActions = {
  play: { videoListIndex: number; videoIndex: number };
  next: () => void;
};

/* State */
export interface IVideo {
  id: string;
  title: string;
  duration: string;
}

export interface IVideoList {
  id: string;
  title: string;
  videos: IVideo[];
}

export interface ICollection {
  videoLists: IVideoList[];
}
export interface IPlayerState {
  collection: ICollection | null;
  currentVideoListIndex: number;
  currentVideoIndex: number;
}
