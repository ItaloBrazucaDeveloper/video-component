import { Volume1Icon, Volume2Icon, VolumeIcon, VolumeXIcon } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VideoAudioControlProps = & ComponentProps<'div'> & {
  level?: 0 | 1 | 2 | 3;
};

const volumeLevels = {
  0: VolumeXIcon,
  1: VolumeIcon,
  2: Volume1Icon,
  3: Volume2Icon
};

export function VideoControlAudio({
  level = 3,
  className,
  ...props
}: VideoAudioControlProps) {
  const Icon = volumeLevels[level];

  return (
    <div className={twMerge("col-span-2 flex gap-3", className)} {...props}>
      <Icon className="text-neutral-50" />
      <input type="range" className="w-25" />
    </div>
  );
}