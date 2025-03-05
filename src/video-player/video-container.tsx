import { ComponentProps } from "react";

type VideoContainerProps = ComponentProps<"div">;

export function VideoContainer({ className, ...props }: VideoContainerProps) {
  return (
    <div
      className="relative aspect-video md:max-w-3/4 md:rounded-xl overflow-hidden"
      {...props}
    />
  );
}
