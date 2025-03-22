import { ComponentProps, ReactNode } from "react";

type VideoControlProps = Omit<ComponentProps<"video">, 'src'> & {
  sources?: string[];
  fallback?: ReactNode;
};

export function VideoSource({ sources, fallback, ...props }: VideoControlProps) {
  return (
    <video className="size-full object-cover" {...props}>
      {
        sources?.map((src, index) => (
          <source key={index} src={src} />
        ))
      }
      {fallback}
    </video>
  );
}
