import { Video, Controls } from "./video-player";

export default function App() {
  return (
    <div className="h-screen w-full bg-neutral-900 grid place-items-center">
      <Video.Container>
        <Video.Source
          sources={["https://videos.pexels.com/video-files/30761060/13157870_1080_1920_60fps.mp4"]}
        />
        
        <Video.Tools>
          <Controls.Timeline />

          <Controls.Container>  
            <Controls.PlayPause />
            <Controls.Time />
            <Video.TimeCounter  />
            <Controls.Audio className="col-start-6" />
            <Controls.ScreenMode />
          </Controls.Container>
        </Video.Tools>
      </Video.Container>
    </div>
  );
}
