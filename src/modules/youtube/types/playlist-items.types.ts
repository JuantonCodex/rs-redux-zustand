import { IPageInfo, IThumbnails } from "./common.types";

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: {
    kind: string;
    videoId: string;
  };
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

interface IPlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
}

export interface IPlaylistItemsResponse {
  kind: string;
  etag: string;
  items: IPlaylistItem[];
  pageInfo: IPageInfo;
}
