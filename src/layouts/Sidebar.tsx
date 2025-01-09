import React, { ElementType, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChevronDown, ChevronUp, Clapperboard, Clock, Film, Flame, Gamepad2, History, Home, Library, Lightbulb, ListVideo, Music2, Newspaper, PlaySquare, Podcast, Radio, Repeat, Shirt, ShoppingBag, Trophy } from 'lucide-react'
import { useSidebarContext } from '../context/SidebarContext'


import Button, { buttonStyles } from '../components/Button'
import { playlists, subscriptions } from '../data/sidebar'
import { PageHeaderFirstSection } from './Header'

export default function Sidebar() {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext()
  return (
    <>
      <aside
        className={`
        sticky top-0 flex flex-col ml-1 pb-4 overflow-y-auto scrollbar-hidden
        ${isLargeOpen ? 'lg:hidden' : 'lg:flex'}
        `}
      >
        <SmallSidebarItem Icon={Home} title='Home' url='/' />
        <SmallSidebarItem Icon={Repeat} title='Shorts' url='/shorts' />
        <SmallSidebarItem Icon={Clapperboard} title='Subscriptions' url='/subscriptions' />
        <SmallSidebarItem Icon={Library} title='Library' url='/library' />
      </aside>
      {isSmallOpen && (
        <div className='lg:hidden fixed inset-0 bg-secondary-dark opacity-50 z-[999]' onClick={close} />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2
        ${isLargeOpen ? "lg:flex" : "lg:hidden"}
        ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className='sticky lg:hidden top-0 pt-2 pb-4 px-2 bg-white'>
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection title='Hello' visibleItemCount={1}>
          <LargeSidebarItem IconOrImgUrl={Home} title='Home' url='/' isActive />
          <LargeSidebarItem IconOrImgUrl={Clapperboard} title='Subscriptions' url='/subscriptions' />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem IconOrImgUrl={History} title='Library' url='/library' isActive />
          <LargeSidebarItem IconOrImgUrl={Clapperboard} title='History' url='/history' />
          <LargeSidebarItem IconOrImgUrl={PlaySquare} title='Your Videos' url='/your-videos' />
          <LargeSidebarItem IconOrImgUrl={Clock} title='Watch Later' url='/playlist?list=WL' />
          {playlists.map(playlist => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title='Subscriptions'>
          {subscriptions.map(subscription => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title='Explore'>
          <LargeSidebarItem IconOrImgUrl={Clock} title='SubscWatch Later' url='/playlist?list=WL' />
          <LargeSidebarItem IconOrImgUrl={Flame} title="Trending" url="/trending" />
          <LargeSidebarItem IconOrImgUrl={ShoppingBag} title="Shopping" url="/shopping" />
          <LargeSidebarItem IconOrImgUrl={Music2} title="Music" url="/music" />
          <LargeSidebarItem IconOrImgUrl={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSidebarItem IconOrImgUrl={Radio} title="Live" url="/live" />
          <LargeSidebarItem IconOrImgUrl={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem IconOrImgUrl={Newspaper} title="News" url="/news" />
          <LargeSidebarItem IconOrImgUrl={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem IconOrImgUrl={Lightbulb} title="Learning" url="/learning" />
          <LargeSidebarItem IconOrImgUrl={Shirt} title="Fashion & Beauty" url="/fashion-beauty" />
          <LargeSidebarItem IconOrImgUrl={Podcast} title="Podcasts" url="/podcasts" />
        </LargeSidebarSection>
      </aside>
    </>
  )
}

type SmallSidebarItemProps = {
  Icon: ElementType
  title: string
  url: string
}

function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      className={twMerge(buttonStyles({ variant: 'ghost' }), 'flex flex-col items-center gap-1 px-1 py-4 rounded-lg')}
      href={url}
    >
      <Icon className='w-6 h-6' />
      <div className='text-sm'>{title}</div>
    </a>
  )
}

type LargeSidebarSectionProps = {
  children: ReactNode
  title?: string
  visibleItemCount?: number
}

// Number.POSITIVE_INFINITY allows you to enter any number of items
function LargeSidebarSection({ children, title, visibleItemCount = Number.POSITIVE_INFINITY }: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children).flat()   // Converts your children to an array
  const showExpandButton = childrenArray.length > visibleItemCount // If visible children is less than the # of items we have, we show the expand button
  const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown // Can import svg and use as Element

  return (
    <div>
      {title && <div className='ml-4 mt-2 mb-1 text-lg'>{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          className='w-full flex items-center gap-4 p-3 rounded-lg'
          variant='ghost'
          onClick={() => setIsExpanded(prevIsExpanded => !prevIsExpanded)}
        >
          <ButtonIcon className='w-6 h-6' />
          <div>{isExpanded ? 'Show Less' : 'Show More'}</div>
        </Button>
      )}
    </div>
  )
}

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string
  title: string
  url: string
  isActive?: boolean
}

function LargeSidebarItem({ IconOrImgUrl, title, url, isActive = false }: LargeSidebarItemProps) {
  return (
    <a
      className={twMerge(buttonStyles({ variant: 'ghost' }), `w-full flex gap-4 p-3 items-center rounded-lg ${isActive ? 'font-bold bg-neutral-100 hover:bg-secondary' : undefined}`)}
      href={url}
    >
      {typeof IconOrImgUrl === 'string' ? (
        <img className='w-6 h-6 rounded-full' src={IconOrImgUrl} alt='Channel Icon' />
      ) : (
        <IconOrImgUrl className='w-6 h-6' />
      )}
      <div className='text-sm text-ellipsis overflow-hidden whitespace-nowrap'>{title}</div>
    </a>
  )
}