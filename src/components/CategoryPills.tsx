import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import Button from './Button'

type CategoryPillsProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

export default function CategoryPills({ categories, selectedCategory, onSelect }: CategoryPillsProps) {
  const [isLeftVisible, setIsLeftVisible] = useState(true)
  const [isRightVisible, setIsRightVisible] = useState(true)

  return (
    <div className='relative overflow-x-hidden'>
      <div className='w-[max-content] flex whitespace-nowrap gap-3 transition-transform'>
        {categories.map(category => (
          <Button
            key={category}
            className='py-1 px-3 rounded-lg whitespace-nowrap'
            variant={selectedCategory === category ? 'dark' : 'default'}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className='w-24 h-full absolute left-0 top-1/2 bg-gradient-to-r from-white from-50% to-transparent -translate-y-1/2'>
          <Button
            className='w-auto h-full aspect-square'
            size='icon'
            variant='ghost'
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className='w-24 h-full absolute right-0 flex justify-end top-1/2 bg-gradient-to-l from-white from-50% to-transparent -translate-y-1/2'>
          <Button
            className='w-auto h-full aspect-square'
            size='icon'
            variant='ghost'
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
} 