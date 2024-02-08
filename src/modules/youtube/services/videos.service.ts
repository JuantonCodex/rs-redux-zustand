import { axiosClient } from "@/clients";
import { IVideosResponse } from "../types/videos.types";

interface IVideosParamsService {
  part?: string;
  videoId: string;
}

export const videosService = async ({
  part = "snippet,contentDetails",
  videoId,
}: IVideosParamsService): Promise<IVideosResponse> => {
  try {
    const response = await axiosClient().get("/videos", {
      params: {
        part,
        id: videoId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while getting video", error);
    throw error;
  }
};
