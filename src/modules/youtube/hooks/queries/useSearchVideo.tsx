import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { searchVideoService } from "../../services";
import { IVideoSearchResponse } from "../../services/interfaces";

const DEFAULT_QUERY = "judo";
interface IReturn {
  data: IVideoSearchResponse | undefined;
  refetch: UseQueryResult<IVideoSearchResponse>["refetch"];
}
export function useSearchVideo(): IReturn {
  const { isLoading, data, refetch } = useQuery<IVideoSearchResponse>({
    queryKey: ["ty-videos"],
    queryFn: async () =>
      searchVideoService({
        query: DEFAULT_QUERY,
      }),
    enabled: false,
  });

  console.log("useSearchVideo > data:", isLoading, data);
  return {
    data,
    refetch,
  };
}
