import { useMemo } from "react";
import { useAppSelector } from "../../../store";
import { IVideo, IVideoList } from "../interfaces";

interface IReturn {
  currentVideoList: IVideoList | undefined;
  currentVideo: IVideo | undefined;
}
export const useVideoPlayer = (): IReturn => {
  const player = useAppSelector((state) => state.player);

  const { currentVideoList, currentVideo } = useMemo(() => {
    const {
      collection,
      currentGroupIndex: currentVideoListIndex,
      currentElementIndex: currentVideoIndex,
    } = player;
    const currentVideoList = collection?.videoLists[currentVideoListIndex];
    const currentVideo = currentVideoList?.videos[currentVideoIndex];

    return {
      currentVideoList,
      currentVideo,
    };
  }, [player]);

  return {
    currentVideoList,
    currentVideo,
  };
};
