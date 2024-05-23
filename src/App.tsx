import { useState } from 'react';

import { categories, videos } from './data/home';

import Header from './layouts/Header';
import CategoryPills from './components/CategoryPills'
import VideoGridItem from './components/VideoGridItem'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <div className='max-w-[1600px] max-h-screen mx-auto'>
      <Header />
      {/* auto will size the container based on its content */}
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
        <div className='bg-red'>Sidebar</div>
        <div className='overflow-x-hidden px-8 pb-4'>
          <div className='sticky top-0 pb-4 bg-white z-10'>
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
          {/* Ensure items are never < 300px wide and if so add another item */}
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map(video => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}