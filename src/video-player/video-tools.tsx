import { ComponentProps } from "react";

type VideoToolsProps = ComponentProps<'div'>;

export function VideoTools(props: VideoToolsProps) {
  return <div {...props} />;
}