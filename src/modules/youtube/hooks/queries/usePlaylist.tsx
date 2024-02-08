import { useQuery } from "@tanstack/react-query";
import { playlistItemsService } from "../../services/playlistItems.service";
import { useState } from "react";
import { IPlaylistItemsResponse } from "../../types/playlist-items.types";

interface IPlaylistReturn {
  data: IPlaylistItemsResponse | undefined;
  updateCondition: (condition: { playlistId: string }) => void;
}

interface ICondition {
  playlistId: string;
}

export function usePlaylist(): IPlaylistReturn {
  const [condition, setCondition] = useState<ICondition | null>();
  console.log("playlist condition", condition);

  const { data } = useQuery({
    queryKey: ["yt-playlist"],
    queryFn: async () => {
      if (!condition) return;
      return await playlistItemsService({
        playlistId: condition?.playlistId,
      });
    },
    enabled: condition !== null,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    updateCondition: setCondition,
  };
}
