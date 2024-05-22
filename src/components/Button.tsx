import type { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

// Add an array of classes to every single button you create
const buttonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      ghost: ['hover:bg-gray-100']
    },
    size: {
      default: ['p-2', 'rounded'],
      icon: ['w-10', 'h-10', 'flex', 'justify-center', 'items-center', 'p-2.5', 'rounded-full']
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

export default function Button({ variant, size, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonStyles({ variant, size })}
    >

    </button>
  )
}