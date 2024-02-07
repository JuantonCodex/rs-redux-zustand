import { axiosClient } from "../../../clients";
import { ICommonRequestResponse, TResourceType } from "../types";

interface ISearchService {
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
}: ISearchService): Promise<ICommonRequestResponse> => {
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
