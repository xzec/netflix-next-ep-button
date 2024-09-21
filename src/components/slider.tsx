import * as RadixSlider from '@radix-ui/react-slider'
import type { ComponentProps, FC } from 'react'

interface SliderProps extends ComponentProps<typeof RadixSlider.Root> {
  ariaLabelThumb?: string
}

const Slider: FC<SliderProps> = ({ ariaLabelThumb, ...rest }) => {
  return (
    <RadixSlider.Root className="relative flex h-5 w-full touch-none select-none items-center" {...rest}>
      <RadixSlider.Track className="relative h-[5px] grow cursor-pointer rounded-full bg-zinc-200 transition-colors dark:bg-zinc-800">
        <RadixSlider.Range className="absolute h-full rounded-full bg-black dark:bg-white" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block h-5 w-5 cursor-pointer rounded-[10px] bg-white shadow-[0_2px_10px] shadow-zinc-600"
        aria-label={ariaLabelThumb}
      />
    </RadixSlider.Root>
  )
}

export default Slider
