import { SkipForward } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VideoControlTimeProps = ComponentProps<'div'>;

export function VideoControlTime({ className, ...props }: VideoControlTimeProps) {
  return (
    <div className={twMerge("text-neutral-50 *:inline")} {...props}>
      <SkipForward className="rotate-180" />
      <SkipForward />
    </div>
  );
}