import { IPageInfo, IThumbnails } from "./common.types";

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

interface IVideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
}

export interface IVideosResponse {
  kind: string;
  etag: string;
  items: IVideoItem[];
  pageInfo: IPageInfo;
}
