import { LucideProps, PauseIcon, PlayIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type VideoToggleControlProps = LucideProps & {
  isPlayed?: boolean
}

export function VideoControlTogglePlayed({
  className,
  isPlayed = false,
  ...props
}: VideoToggleControlProps) {
  const Icon = isPlayed ? PlayIcon : PauseIcon;

  return (
    <Icon
      className={twMerge("text-neutral-50 fill-neutral-50 stroke-0", className)}
      {...props}
    />
  );
}