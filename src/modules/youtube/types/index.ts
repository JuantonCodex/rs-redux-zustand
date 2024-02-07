interface IThumbnailItem {
  url: string;
  width: number;
  height: number;
}

interface IThumbnails {
  default: IThumbnailItem;
  medium: IThumbnailItem;
  high: IThumbnailItem;
}

export type TResourceType = "video" | "channel" | "playlist";

export interface IItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: IThumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface ICommonRequestResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IItem[];
}
