import { Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon } from "lucide-react";

type VideoAudioControlProps = {
  level?: 0 | 1 | 2 | 3;
};

const volumeLevels = {
  0: VolumeXIcon,
  1: VolumeIcon,
  2: Volume1Icon,
  3: Volume2Icon
}

export function VideoControlAudio({ level = 3 }: VideoAudioControlProps) {
  const Icon = volumeLevels[level];

  return (
    <Icon className="text-neutral-50 fill-neutral-50" />
  );
}