import { IPageInfo, IThumbnails } from "./common.types";

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IItem {
  kind: string;
  etag: string;
  snippet: ISnippet;
}

export type IVideoItem = IItem & {
  id: {
    kind: string;
    videoId: string;
  };
};

export type IPlaylistItem = IItem & {
  id: {
    kind: string;
    playlistId: string;
  };
};

export interface ISearchBaseResponse<T> {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: T[];
}

export type TSearchVideoResponse = ISearchBaseResponse<IVideoItem>;
export type TSearchPlaylistResponse = ISearchBaseResponse<IPlaylistItem>;
export type TSearchResponse = TSearchVideoResponse | TSearchPlaylistResponse;
