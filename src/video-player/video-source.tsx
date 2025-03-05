import { ComponentProps } from "react";

type VideoControlProps = ComponentProps<"video">;

export function VideoSource({ src, ...props }: VideoControlProps) {
  return (
    <video className="size-full object-cover" {...props}>
      <source src={src} />
    </video>
  );
}
