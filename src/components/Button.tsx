import type { ComponentProps } from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

// Add an array of classes to every single button you create
export const buttonStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: ['bg-secondary', 'hover:bg-secondary-hover'],
      dark: ['bg-secondary-dark', 'hover:bg-secondary-dark-hover', 'text-secondary'],
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

export default function Button({ className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ className, size, variant }), className)}
    />
  )
}