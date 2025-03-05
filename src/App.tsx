import { Video } from "./video-player";

export default function App() {
  return (
    <div className="h-screen w-full bg-neutral-900 grid place-items-center">
      <Video.Container>
        <Video.Source src="https://videos.pexels.com/video-files/30761060/13157870_1080_1920_60fps.mp4" />
        <Video.Controls>
          <Video.Timeline />
          <div className="flex justify-between *:flex">
            <div>
              <Video.PlayPause />
              <Video.Time />
              <Video.CountTime />
            </div>
            <div>
              <Video.Audio />
              <Video.ScreenMode />
            </div>
          </div>
        </Video.Controls>
      </Video.Container>
    </div>
  );
}
