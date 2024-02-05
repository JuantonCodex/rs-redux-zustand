import { axiosClient } from "../../../clients";
import { IVideoSearchResponse } from "../types";

interface ISearchVideoService {
  query: string;
  searchPart?: string;
  pageToken?: string;
  type?: string;
}

export const searchVideoService = async ({
  query,
  searchPart = "snippet",
  pageToken = "",
  type = "video",
}: ISearchVideoService): Promise<IVideoSearchResponse> => {
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
    console.error("Error while searching video:", error);
    throw error;
  }
};
