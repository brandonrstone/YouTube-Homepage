import { ArrowLeft, Bell, MenuIcon, Mic, Search, Upload, User } from 'lucide-react'

import Logo from '../assets/Logo.png'
import Button from '../components/Button'
import { useState } from 'react'
import { useSidebarContext } from '../context/SidebarContext'

export default function Header() {
  const { toggle } = useSidebarContext()
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
  return (
    <div className='flex justify-between pt-2 mb-6 mx-4 gap-10 lg:gap-20'>
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form className={`flex-grow justify-center gap-4 ${showFullWidthSearch ? 'flex' : 'hidden md:flex'}`}>
        {showFullWidthSearch && (
          <Button
            className='flex-shrink-0'
            size='icon'
            type='button'
            variant='ghost'
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className='max-w-[600px] flex flex-grow'>
          <input
            className='w-full py-1 px-4 text-lg border border-secondary rounded-l-full 
            shadow-sm shadow-secondary focus:border-blue-500 outline-none'
            type='search'
            placeholder='search'
          />
          <Button className='flex-shrink-0 py-2 px-4 rounded-r-full border border-l-0 border-secondary-border'>
            <Search />
          </Button>
        </div>
        <Button className='flex-shrink-0' size='icon' type='button'>
          <Mic />
        </Button>
      </form>
      <div className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
        <Button
          className='md:hidden'
          size='icon'
          variant='ghost'
          onClick={() => setShowFullWidthSearch(true)}
        >
          <Search />
        </Button>
        <Button className='md:hidden' size='icon' variant='ghost'>
          <Mic />
        </Button>
        <Button size='icon' variant='ghost'>
          <Upload />
        </Button>
        <Button size='icon' variant='ghost'>
          <Bell />
        </Button>
        <Button size='icon' variant='ghost'>
          <User />
        </Button>
      </div>
    </div>
  )
}

export function PageHeaderFirstSection({ hidden = false }: { hidden?: boolean }) {
  const { toggle } = useSidebarContext()
  return (
    <div className={`flex-shrink-0 gap-4 items-center ${hidden ? 'hidden' : 'flex'}`}>
      <Button size={'icon'} variant={'ghost'} onClick={toggle}>
        <MenuIcon />
      </Button>
      <a href="/">
        <img className='h-10' src={Logo} alt='YouTube Logo' />
      </a>
    </div>
  )
}