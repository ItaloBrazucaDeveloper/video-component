import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VideoContainerProps = ComponentProps<"div">;

export function VideoContainer({ className, ...props }: VideoContainerProps) {
  return (
    <div
      className={
        twMerge("relative aspect-video md:max-w-3/4 md:rounded-xl overflow-hidden", className)
      }
      {...props}
    />
  );
}
