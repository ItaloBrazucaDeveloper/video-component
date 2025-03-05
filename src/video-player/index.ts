import { VideoSource } from "./video-source";
import { VideoTimeline } from "./video-timeline";
import { VideoContainer } from "./video-container";

import { VideoControlAudio } from "./video-controls/video-control-audio";
import { VideoControlContainer } from "./video-controls/video-control-container";
import { VideoControlScreenMode } from "./video-controls/video-control-screen-mode";
import { VideoControlTogglePlayed } from "./video-controls/video-control-toggle-played";
import { VideoControlTime } from "./video-controls/video-control-time";
import { VideoTimeCount } from "./video-time-count";

export const Video = {
  Container: VideoContainer,
  Source: VideoSource,
  Timeline: VideoTimeline,
  Controls: VideoControlContainer,
  Audio: VideoControlAudio,
  ScreenMode: VideoControlScreenMode,
  PlayPause: VideoControlTogglePlayed,
  Time: VideoControlTime,
  CountTime: VideoTimeCount
};
