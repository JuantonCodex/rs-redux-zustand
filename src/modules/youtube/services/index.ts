import { axiosClient } from "../../../clients";
import { IVideoSearchResponse } from "./interfaces";

interface ISearchVideoService {
  query: string;
  type?: string;
  pageToken?: string;
}

export const searchVideoService = async ({
  query,
  type = "snippet",
  pageToken = "",
}: ISearchVideoService): Promise<IVideoSearchResponse> => {
  try {
    const response = await axiosClient().get("/search", {
      params: {
        q: query,
        part: type,
        pageToken: pageToken,
        maxResults: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while searching video:", error);
    throw error;
  }
};
