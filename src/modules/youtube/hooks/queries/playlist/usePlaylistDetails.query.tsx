import { useQuery } from "@tanstack/react-query";
import { playlistItemsService } from "../../../services";
import { useState } from "react";
import { IPlaylistItemsResponse } from "../../../types/playlist-items.type";

interface IPlaylistDetailsReturn {
  data: IPlaylistItemsResponse | undefined;
  getPlaylistDetails: (criterion: { playlistId: string }) => void;
}

type TPlaylistID = string | undefined;

interface IPlaylistDetailsParams {
  isEnabled?: boolean;
  playlistId?: TPlaylistID;
}

export function usePlaylistDetailsQuery({
  isEnabled = false,
  playlistId = undefined,
}: IPlaylistDetailsParams): IPlaylistDetailsReturn {
  const [criterion, setCriterion] = useState<{ playlistId: TPlaylistID }>({
    playlistId,
  });
  const enabled = isEnabled || criterion.playlistId !== undefined;

  const queryResult = useQuery({
    queryKey: ["yt-get-playlist-details", criterion.playlistId],
    queryFn: async () => {
      const { playlistId } = criterion;
      console.log("playlistId ->", playlistId);
      if (!playlistId) return;
      return await playlistItemsService({ playlistId });
    },
    enabled,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const getPlaylistDetails = (newCriterion: { playlistId: string }) => {
    setCriterion(newCriterion);
  };

  return {
    ...queryResult,
    getPlaylistDetails,
  };
}
