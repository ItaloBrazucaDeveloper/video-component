import { FullscreenIcon, RectangleHorizontalIcon } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VideoControlScreenMode = ComponentProps<'div'>;

export function VideoControlScreenMode({ className, ...props }: VideoControlScreenMode) {
  return (
    <div className={twMerge("text-neutral-50 *:inline space-x-2", className)} {...props}>
      <RectangleHorizontalIcon />
      <FullscreenIcon />
    </div>
  );
}