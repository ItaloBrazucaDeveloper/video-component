import { tv, VariantProps } from "tailwind-variants";

const videoTimeline = tv({
  slots: {
    container: 'absolute bottom-15 row-span-1 group h-1.5 md:h-2 hover:h-2.25 w-full transition-all',
    bar: 'ring ring-neutral-900/30 rounded-xl bg-neutral-600/70 size-full',
    rangeBar: 'relative rounded-xl h-full w-20',
    currentTime: 'absolute z-50 bg-rose-500 size-full rounded-xl',
    pointCursor: [
      'absolute z-40 -translate-1/2 top-1/2 left-full bg-rose-500 size-4',
      'scale-0 rounded-full group-hover:scale-100 shadow shadow-neutral-600/50',
      'transition-transform'
    ],
    buffer: 'absolute -right-5 bg-neutral-500 size-full'
  }
});

type VideoTimelineProps = VariantProps<typeof videoTimeline>;

export function VideoTimeline({ }: VideoTimelineProps) {
  const {
    container,
    bar,
    currentTime,
    rangeBar,
    pointCursor,
    buffer
  } = videoTimeline();

  return (
    <div className={container()}>
      <div className={bar()}>
        <div className={rangeBar()}>
          <div data- className={currentTime()} />
          <div className={pointCursor()} />
          <div data-buffer-size className={buffer()} />
        </div>
      </div>
    </div>
  );
}
