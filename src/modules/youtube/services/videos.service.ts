import { axiosClient } from "@/clients";
import { ICommonRequestResponse } from "../types";

interface IVideosService {
  part?: string;
  id: string;
}

export const videosService = async ({
  part = "snippet,contentDetails",
  id,
}: IVideosService): Promise<ICommonRequestResponse> => {
  try {
    const response = await axiosClient().get("/videos", {
      params: {
        part,
        id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while getting video", error);
    throw error;
  }
};
