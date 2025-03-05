import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type VideoControlsContainerProps = ComponentProps<'div'>;

export function VideoControlContainer({
  className,
  ...props
}: VideoControlsContainerProps) {
  return (
    <div
      className={
        twMerge('absolute bottom-5 w-full grid grid-rows-2 px-7', className)
      }
      {...props}
    />
  );
}