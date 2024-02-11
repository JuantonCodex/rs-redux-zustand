import { useQuery, useQueryClient } from "@tanstack/react-query";
import { playlistItemsService } from "../../../services";
import { useRef } from "react";
import { IPlaylistItemsResponse } from "../../../types/playlist-items.type";

interface IPlaylistDetailsReturn {
  data: IPlaylistItemsResponse | undefined;
  fetchPlaylistDetails: (criterion: { playlistId: string }) => void;
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
  const queryClient = useQueryClient();
  const criterionRef = useRef<{ playlistId: TPlaylistID }>({ playlistId });

  const enabled = isEnabled || criterionRef.current.playlistId !== undefined;

  const queryFn = async () => {
    const { playlistId } = criterionRef.current;
    if (!playlistId) return;
    return await playlistItemsService({ playlistId });
  };

  const queryResult = useQuery({
    queryKey: ["yt-get-playlist-details", criterionRef.current.playlistId],
    queryFn,
    enabled,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  const fetchPlaylistDetails = async (criterion: { playlistId: string }) => {
    criterionRef.current = criterion;
    queryClient.setQueryData(
      ["yt-get-playlist-details", criterion.playlistId],
      queryResult.data,
    );
    await queryResult.refetch();
  };

  return {
    ...queryResult,
    fetchPlaylistDetails,
  };
}
