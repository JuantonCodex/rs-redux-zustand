import { useAppSelector } from "../../../store";
import { IVideo, IVideoList } from "../interfaces";

interface IReturn {
  currentVideoList: IVideoList | undefined;
  currentVideo: IVideo | undefined;
}
export const useVideoPlayer = (): IReturn => {
  const { currentVideoList, currentVideo } = useAppSelector((state) => {
    const { currentVideoListIndex, currentVideoIndex } = state.player;

    const currentVideoList =
      state.player.collection?.videoLists[currentVideoListIndex];
    const currentVideo = currentVideoList?.videos[currentVideoIndex];

    return { currentVideoList, currentVideo };
  });

  return {
    currentVideoList,
    currentVideo,
  };
};
