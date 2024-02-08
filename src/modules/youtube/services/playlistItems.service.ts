import { axiosClient } from "@/clients";
import { IPlaylistItemsResponse } from "../types/playlist-items.types";

interface IPlaylistItemsService {
  part?: string;
  playlistId: string;
}

export const playlistItemsService = async ({
  part = "id,status,snippet,contentDetails",
  playlistId,
}: IPlaylistItemsService): Promise<IPlaylistItemsResponse> => {
  try {
    const response = await axiosClient().get("/playlistItems", {
      params: {
        part,
        playlistId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while getting video", error);
    throw error;
  }
};
