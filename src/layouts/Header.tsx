import Logo from '../assets/Logo.jpg'
import { MenuIcon } from 'lucide-react'
import Button from '../components/Button'

export default function Header() {
  return (
    <div className='flex justify-between gap-10 lg:gap-20'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <Button size={'icon'} variant={'ghost'}>
          <MenuIcon />
        </Button>
        <a href="/">
          <img
            className='h-10'
            src={Logo}
            alt='YouTube Logo'
          />
        </a>
      </div>
    </div>
  )
}