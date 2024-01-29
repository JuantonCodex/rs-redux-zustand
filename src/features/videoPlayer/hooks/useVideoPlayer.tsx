import { useAppSelector } from "../../../store";
import { IVideo, IVideoList } from "../interfaces";

interface IReturn {
  currentVideoList: IVideoList | undefined;
  currentVideo: IVideo | undefined;
}
export const useVideoPlayer = (): IReturn => {
  const { currentVideoList, currentVideo } = useAppSelector((state) => {
    const {
      currentVideoListIndex: currentModuleIndex,
      currentVideoIndex: currentVideoIndex,
    } = state.player;

    const currentVideoList =
      state.player.collection?.videoLists[currentModuleIndex];
    const currentVideo = currentVideoList?.videos[currentVideoIndex];

    return { currentVideoList, currentVideo };
  });

  return {
    currentVideoList,
    currentVideo,
  };
};
