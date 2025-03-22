import { VideoControlAudio } from "./control-audio";
import { VideoControlContainer } from "./control-container";
import { VideoControlScreenMode } from "./control-screen-mode";
import { VideoControlTime } from "./control-time";
import { VideoControlTogglePlayed } from "./control-toggle-played";
import { VideoTimeline } from "./video-timeline";

export const Controls = {
  Container: VideoControlContainer,
  Audio: VideoControlAudio,
  ScreenMode: VideoControlScreenMode,
  PlayPause: VideoControlTogglePlayed,
  Time: VideoControlTime,
  Timeline: VideoTimeline
};