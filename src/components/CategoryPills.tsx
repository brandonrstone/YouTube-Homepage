import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import Button from './Button'

type CategoryPillsProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

const TRANSLATE_AMOUNT = 200

export default function CategoryPills({ categories, selectedCategory, onSelect }: CategoryPillsProps) {
  const [translate, setTranslate] = useState(0)
  const [isLeftVisible, setIsLeftVisible] = useState(true)
  const [isRightVisible, setIsRightVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Resize observer to monitor the left/right buttons for the pills
  useEffect(() => {
    if (containerRef.current == null) return

    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target // Same as containerRef.current in thise case
      if (container == null) return

      setIsLeftVisible(translate > 0)
      setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
    })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [categories, translate])

  return (
    <div
      className='relative overflow-x-hidden'
      ref={containerRef}
    >
      <div
        className='w-[max-content] flex whitespace-nowrap gap-3 transition-transform'
        style={{ transform: `translateX(-${translate}px)` }}
      >
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
            className='w-auto h-full aspect-square p-1.5'
            size='icon'
            variant='ghost'
            onClick={() => {
              setTranslate(translate => {
                const newTranslate = translate - TRANSLATE_AMOUNT
                if (newTranslate <= 0) return 0
                return newTranslate
              })
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            className='w-auto h-full aspect-square p-1.5'
            size='icon'
            variant='ghost'
            onClick={() => setTranslate(translate => {
              console.log(containerRef)
              console.log(translate)
              if (containerRef.current == null) return translate
              const edge = containerRef.current.scrollWidth // Full scrollable width
              const width = containerRef.current.clientWidth // Visible width; amount shown on screen
              const newTranslate = translate + TRANSLATE_AMOUNT
              if (newTranslate + width >= edge) return edge - width
              return newTranslate
            })}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
} 