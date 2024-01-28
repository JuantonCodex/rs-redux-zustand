interface IThumbnailSize {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: IThumbnailSize;
  medium: IThumbnailSize;
  high: IThumbnailSize;
}

export interface IVideoSearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<{
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
      thumbnails: Thumbnails;
      channelTitle: string;
      liveBroadcastContent: string;
      publishTime: string;
    };
  }>;
}
