import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VideoTimeCounterProps = ComponentProps<'span'> & {
  time?: string;
};

export function VideoTimeCounter({
  time = '04:50',
  className,
  ...props 
}: VideoTimeCounterProps) {
  return (
    <span className={twMerge("text-neutral-50", className)} {...props}>
      {time}
    </span>
  );
}