import { VideoSource } from "./video-source";
import { VideoTimeline } from "./video-controls/video-timeline";
import { VideoContainer } from "./video-container";
import { VideoTimeCounter } from "./video-time-counter";

import { Controls } from "./video-controls";
import { Settings } from "./video-settings";
import { VideoTools } from "./video-tools";

const Video = {
  Container: VideoContainer,
  Tools: VideoTools,
  Source: VideoSource,
  Timeline: VideoTimeline,
  TimeCounter: VideoTimeCounter
};

export { Video, Controls, Settings };
