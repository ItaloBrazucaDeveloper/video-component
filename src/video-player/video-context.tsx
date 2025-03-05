import { createContext, useContext } from "react";

type VideoContextProps = {
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