interface IThumbnailItem {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnails {
  default: IThumbnailItem;
  medium: IThumbnailItem;
  high: IThumbnailItem;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export type TResourceType = "video" | "channel" | "playlist";
