import React, { ReactNode, useContext, useEffect, useState } from 'react'

type SidebarProviderProps = {
  children: ReactNode
}

type SidebarContextType = {
  isLargeOpen: boolean
  isSmallOpen: boolean
  toggle: () => void
  close: () => void
}

const SidebarContext = React.createContext<SidebarContextType | null>(null)

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true)
  const [isSmallOpen, setIsSmallOpen] = useState(false)

  // Resize event listener so the siderbar does not open again when going from large => small screen size
  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false)
    }

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  function isScreenSmall() {
    return window.innerWidth < 1024 // Matches Tailwind value
  }

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen(prevIsSmallOpen => !prevIsSmallOpen)
    } else {
      setIsLargeOpen(prevIsLargeOpen => !prevIsLargeOpen)
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false)
    } else {
      setIsLargeOpen(false)
    }
  }

  return (
    <SidebarContext.Provider value={{ isLargeOpen, isSmallOpen, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebarContext() {
  const sidebarContext = useContext(SidebarContext)
  if (sidebarContext == null) throw Error('Cannot use Sidebar Context outside of Sidebar Provider.')
  return sidebarContext
}