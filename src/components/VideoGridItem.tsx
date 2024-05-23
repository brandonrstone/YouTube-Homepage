import { useEffect, useRef, useState } from 'react'
import { formatDuration } from '../utils/formatDuration'
import { formatTimeAgo } from '../utils/formatTimeAgo'

type VideoGridItemProps = {
  id: string
  title: string
  channel: {
    id: string
    name: string
    profileUrl: string
  }
  views: number
  postedAt: Date
  duration: number
  thumbnailUrl: string
  videoUrl: string
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: 'compact' })

export default function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl
}: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current == null) return

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [isVideoPlaying])

  return (
    <div
      className='flex flex-col gap-2'
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <a className='relative aspect-video' href={`/watch?v=${id}`}>
        <img
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${isVideoPlaying ? 'rounded-0' : 'rounded-xl'}`}
          src={thumbnailUrl}
          alt='Video thumbnail'
        />
        <div className='absolute bottom-1 px-0.5 bg-secondary-dark text-secondary text-sm rounded'>
          {formatDuration(duration)}
        </div>
        <video
          className={`block h-full absolute inset-0 object-cover duration-200 delay-200 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
          src={videoUrl}
          ref={videoRef}
          muted
          playsInline
        />
      </a>
      <div className='flex gap-2'>
        <a className='flex-shrink-0' href={`/@${channel.id}`}>
          <img className='w-12 h-12 rounded-full' src={channel.profileUrl} />
        </a>
        <div className='flex flex-col'>
          <a className='font-bold' href={`/watch?v=${id}`}>{title}</a>
          <a className='text-secondary' href={`/@${channel.id}`}>{channel.name}</a>
          <div className='text-secondary text-sm'>
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  )
}