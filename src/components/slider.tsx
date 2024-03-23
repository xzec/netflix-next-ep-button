import { ComponentProps, type FC } from 'react'
import * as RadixSlider from '@radix-ui/react-slider'

interface SliderProps extends ComponentProps<typeof RadixSlider.Root> {
  ariaLabelThumb?: string
}

const Slider: FC<SliderProps> = ({ ariaLabelThumb, ...rest }) => {
  return (
    <RadixSlider.Root
      className="relative flex h-5 touch-none select-none items-center"
      {...rest}
    >
      <RadixSlider.Track className="relative h-[3px] grow rounded-full bg-zinc-800">
        <RadixSlider.Range className="absolute h-full rounded-full bg-white" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block h-5 w-5 rounded-[10px] bg-white shadow-[0_2px_10px] shadow-zinc-600"
        aria-label={ariaLabelThumb}
      />
    </RadixSlider.Root>
  )
}

export default Slider
