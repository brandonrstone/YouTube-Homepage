import { useState } from 'react';

import { categories } from './data/home';

import Header from './layouts/Header';
import CategoryPills from './components/CategoryPills';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <div className='max-h-screen flex flex-col'>
      <Header />
      <div className='grid grid-cols-[1fr,auto] flex-grow-1 overflow-auto'>
        <div>Sidebar</div>
        <div className='overflow-x-hidden px-8 pb-4'>
          <div className='sticky top-0 pb-4 bg-white z-10'>
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          </div>
        </div>
      </div>
    </div>
  )
}