import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { searchService } from "../../services/search.service";
import { ICommonRequestResponse, TResourceType } from "../../types";
import { useState } from "react";

const DEFAULT_QUERY = "judo";

interface ISearchReturn {
  data: ICommonRequestResponse | undefined;
  refetch: UseQueryResult<ICommonRequestResponse>["refetch"];
  updateSearchCondition: (condition: { type: TResourceType }) => void;
}

interface ISearchCondition {
  type: TResourceType;
}

export function useSearchVideo(): ISearchReturn {
  const [searchCondition, setSearchCondition] =
    useState<ISearchCondition | null>(null);

  console.log("searchCondition >", searchCondition);

  const { data, refetch } = useQuery<ICommonRequestResponse>({
    queryKey: ["ty-videos", searchCondition?.type],
    queryFn: async () =>
      searchService({
        query: DEFAULT_QUERY,
        ...searchCondition,
      }),
    enabled: searchCondition !== null,
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    refetch,
    updateSearchCondition: setSearchCondition,
  };
}
