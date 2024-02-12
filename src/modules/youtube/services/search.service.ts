import { axiosClient } from "../../../clients";
import { TResourceType } from "../types/common.type";
import { TSearchResponse } from "../types/search.type";

interface ISearchParamsService {
  query: string;
  searchPart?: string;
  pageToken?: string;
  type?: TResourceType;
}

export const searchService = async ({
  query,
  searchPart = "snippet",
  pageToken = "",
  type = "video",
}: ISearchParamsService): Promise<TSearchResponse> => {
  try {
    const response = await axiosClient().get("/search", {
      params: {
        q: query,
        part: searchPart,
        pageToken: pageToken,
        maxResults: 10,
        type,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while searching:", error);
    throw error;
  }
};
