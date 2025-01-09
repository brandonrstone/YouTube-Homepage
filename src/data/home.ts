import Fall from '../assets/Fall.jpg'
import FishTacos from '../assets/FishTacos.webp'
import FoodCentralLogo from '../assets/FoodCentralLogo.webp'
import HandyRepairLogo from '../assets/HandyRepairLogo.png'
import HandyRepairThumbnail from '../assets/HandyRepairThumbnail.webp'
import MacbookThumbnail from '../assets/MacbookThumbnail.webp'
import MensFitnessLogo from '../assets/MensFitnessLogo.jpg'
import MensFitnessThumbnail from '../assets/MensFitnessThumbnail.webp'
import ReactDevCentralLogo from '../assets/ReactLogo.jpg'
import TechLogo from '../assets/TechLogo.webp'
import TheTraveVlogLogo from '../assets/TheTraveVlogLogo.jpeg'

export const categories = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Weight Lifting",
  "Bowling",
  "Hiking",
  "React",
  "Next.js",
  "Functional Programming",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
]

export const videos = [
  {
    id: "1",
    title: "DIY Bathroom Remodel",
    channel: {
      name: "Renovate Now",
      id: "RenovateNow",
      profileUrl: HandyRepairLogo
    },
    views: 222536,
    postedAt: new Date("2023-08-29"),
    duration: 938,
    thumbnailUrl: HandyRepairThumbnail,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "2",
    title: "NEW Way To Create Variables In JavaScript",
    channel: {
      name: "React Dev Central",
      id: "ReactDevCentral",
      profileUrl: ReactDevCentralLogo
    },
    views: 257136,
    postedAt: new Date("2023-08-22"),
    duration: 732,
    thumbnailUrl: "https://i.ytimg.com/vi/d6a8RymS1zI/maxresdefault.jpg",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "3",
    title: "Top 10 Must-Visit Locations in the Fall",
    channel: {
      name: "The Travel Vlog",
      id: "TheTravelVlog",
      profileUrl: TheTraveVlogLogo,
    },
    views: 1232300,
    postedAt: new Date("2023-10-05"),
    duration: 120,
    thumbnailUrl: Fall,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "4",
    title: "Leg Workout Routines For Men",
    channel: {
      name: "Fitness Daily",
      id: "FitnessDaily",
      profileUrl: MensFitnessLogo
    },
    views: 35000,
    postedAt: new Date("2023-9-19"),
    duration: 443,
    thumbnailUrl: MensFitnessThumbnail,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "5",
    title: "The BEST Fish Tacos Recipe EVER!",
    channel: {
      name: "Food Central",
      id: "FoodCentral",
      profileUrl: FoodCentralLogo
    },
    views: 884340,
    postedAt: new Date("2023-03-03"),
    duration: 54,
    thumbnailUrl: FishTacos,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "6",
    title: "Tails OS in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl: "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: 10323340,
    postedAt: new Date("2023-08-09"),
    duration: 100,
    thumbnailUrl: "https://i.ytimg.com/vi/mVKAyw0xqxw/maxresdefault.jpg",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "7",
    title: "My Review of the New Macbook Pro",
    channel: {
      name: "Honest Tech Reviews",
      id: "Honest Tech Reviews",
      profileUrl: TechLogo
    },
    views: 1323340,
    postedAt: new Date("2023-08-09"),
    duration: 100,
    thumbnailUrl: MacbookThumbnail,
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "8",
    title: "Zig in 100 Seconds",
    channel: {
      name: "Fireship",
      id: "Fireship",
      profileUrl: "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
    },
    views: 20323340,
    postedAt: new Date("2023-09-09"),
    duration: 105,
    thumbnailUrl: "https://i.ytimg.com/vi/kxT8-C1vmd4/maxresdefault.jpg",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  }
]