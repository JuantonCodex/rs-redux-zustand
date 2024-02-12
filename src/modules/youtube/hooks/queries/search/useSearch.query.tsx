import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { searchService } from "../../../services";
import { TResourceType } from "../../../types/common.type";
import {
  TSearchResponse,
  ISearchBaseResponse,
} from "../../../types/search.type";
import { useState } from "react";
import {
  TItemsStandardized,
  standardizedItemsAdapter,
} from "./useSearch.adapter";

const DEFAULT_QUERY = "judo";

type TSearchReturn = ISearchBaseResponse<TItemsStandardized>;

interface ISearchReturn {
  data: TSearchReturn | undefined;
  refetch: UseQueryResult<TSearchResponse>["refetch"];
  updateSearchCondition: (condition: { type: TResourceType }) => void;
}

interface ISearchCondition {
  type: TResourceType;
}

export function useSearchQuery(): ISearchReturn {
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
    staleTime: 1000 * 60 * 30, // thirty minutes
    refetchOnWindowFocus: false,
  });

  const standardizedItems = query?.data?.items
    ? standardizedItemsAdapter(query.data.items)
    : [];

  const standardizedData = query.data
    ? {
        ...query.data,
        items: standardizedItems,
      }
    : undefined;

  return {
    data: standardizedData,
    refetch: query.refetch,
    updateSearchCondition: setSearchCondition,
  };
}
