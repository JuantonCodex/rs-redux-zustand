import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { searchVideoService } from "../../services/search-video.service";
import { IVideoSearchResponse } from "../../types";
import { useState } from "react";

const DEFAULT_QUERY = "judo";

interface IReturn {
  data: IVideoSearchResponse | undefined;
  refetch: UseQueryResult<IVideoSearchResponse>["refetch"];
  updateSearchCondition: ({ type }: { type: string }) => void;
}

interface ISearchCondition {
  type: string;
}

export function useSearchVideo(): IReturn {
  const [searchCondition, setSearchCondition] =
    useState<ISearchCondition | null>(null);

  console.log("searchCondition >", searchCondition);

  const { data, refetch } = useQuery<IVideoSearchResponse>({
    queryKey: ["ty-videos", searchCondition?.type],
    queryFn: async () =>
      searchVideoService({
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
