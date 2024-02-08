import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { searchService } from "../../services/search.service";
import { TResourceType } from "../../types/common.types";
import {
  TSearchResponse,
  ISearchBaseResponse,
  IVideoItem,
  IPlaylistItem,
} from "../../types/search.types";
import { useState } from "react";

const DEFAULT_QUERY = "judo";

type TSearchReturn = ISearchBaseResponse<
  | (Omit<IVideoItem, "id"> & {
      id: {
        kind: string;
        id: string;
      };
    })
  | (Omit<IPlaylistItem, "id"> & {
      id: {
        kind: string;
        id: string;
      };
    })
>;

interface ISearchReturn {
  data: TSearchReturn | undefined;
  refetch: UseQueryResult<TSearchResponse>["refetch"];
  updateSearchCondition: (condition: { type: TResourceType }) => void;
}

interface ISearchCondition {
  type: TResourceType;
}

export function useSearch(): ISearchReturn {
  const [searchCondition, setSearchCondition] =
    useState<ISearchCondition | null>(null);

  const query = useQuery<TSearchResponse>({
    queryKey: ["ty-videos", searchCondition?.type],
    queryFn: async () =>
      searchService({
        query: DEFAULT_QUERY,
        ...searchCondition,
      }),
    enabled: searchCondition !== null,
    staleTime: 1000 * 60 * 10, // ten minutes
    refetchOnWindowFocus: false,
  });

  const homologatedItems =
    query?.data?.items.map((item: IVideoItem | IPlaylistItem) => {
      let resourceId = "videoId";
      if ("videoId" in item.id) {
        resourceId = item.id.videoId;
      } else if ("playlistId" in item.id) {
        resourceId = item.id.playlistId;
      }

      return {
        ...item,
        id: {
          kind: item.id.kind,
          id: resourceId,
        },
      };
    }) ?? [];

  const homologatedData = query.data
    ? {
        ...query.data,
        items: homologatedItems,
      }
    : undefined;

  return {
    data: homologatedData,
    refetch: query.refetch,
    updateSearchCondition: setSearchCondition,
  };
}
