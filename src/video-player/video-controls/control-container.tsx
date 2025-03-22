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
        twMerge('flex justify-between absolute bottom-5 w-full', className)
      }
      {...props}
    />
  );
}