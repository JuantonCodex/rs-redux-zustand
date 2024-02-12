import { IItem } from "@/modules/youtube/types/search.type";

export type TItemsStandardized = IItem & {
  id: {
    kind: string;
    id: string;
  };
};

type TItems = IItem & {
  id: {
    kind: string;
    videoId?: string;
    playlistId?: string;
    channelId?: string;
  };
};

export function standardizedItemsAdapter(
  items: TItems[],
): TItemsStandardized[] {
  return items.map((item: TItems) => {
    const id = item.id.videoId ?? item.id.playlistId ?? item.id.channelId ?? "";
    return {
      ...item,
      id: {
        kind: item.id.kind,
        id,
      },
    };
  });
}
