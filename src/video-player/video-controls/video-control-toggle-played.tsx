import { PauseIcon, PlayIcon } from "lucide-react";

type VideoToggleControlProps = {
  isPlayed?: boolean
}

export function VideoControlTogglePlayed({ isPlayed = false }: VideoToggleControlProps) {
  const Icon = isPlayed ? PlayIcon : PauseIcon;

  return (
    <Icon
      className="text-neutral-50 fill-neutral-50"
    />
  );
}