import { useQuery } from "@tanstack/react-query";
import { playlistItemsService } from "../../services/playlistItems.service";
import { useState } from "react";
import { IPlaylistItemsResponse } from "../../types/playlist-items.types";

interface IPlaylistDetailsReturn {
  data: IPlaylistItemsResponse | undefined;
  updateCondition: (condition: { playlistId: string }) => void;
}

interface ICondition {
  playlistId: string;
}

interface IPlaylistDetailsParams {
  isEnabled: boolean;
  playlistId: string;
}

export function usePlaylistDetailsQuery({
  isEnabled,
  playlistId,
}: IPlaylistDetailsParams): IPlaylistDetailsReturn {
  // This state change will trigger another request when it is modified
  const [condition, setCondition] = useState<ICondition | null>(null);

  const { data } = useQuery({
    queryKey: ["yt-get-playlist-details", playlistId],
    queryFn: async () => {
      return await playlistItemsService({ playlistId });
    },
    enabled: isEnabled,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    updateCondition: setCondition,
  };
}
