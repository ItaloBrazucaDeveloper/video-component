import { createContext, useContext } from "react";

type VideoContextProps = {
  isPaused: boolean;
  isPlayed: boolean;
  currentTime: boolean;
  screenMode: 'theater' | 'full-screen' | 'default'
  togglePlayVideo: () => void;
  onChangeVideoPointer: () => void;
};

const VideoContext = createContext<VideoContextProps>({} as VideoContextProps);

export function getProviders() {
  return {}
}

export function getContext() {
  return useContext(VideoContext);
}