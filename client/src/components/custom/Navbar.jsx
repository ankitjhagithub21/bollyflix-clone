import React from 'react'
import { Search } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useNavigate } from 'react-router-dom';


const movieData = [
  {
    id: 1,
    name: "SOUTH HINDI DUBBED",
    path: "south-hindi-dubbed"
  },
  {
    id: 2,
    name: "HOLLYWOOD",
    path: "hollywood"
  },
  {
    id: 3,
    name: "BOLLYWOOD",
    path: "bollywood"
  },
  {
    id: 4,
    name: "TAMIL",
    path: "tamil"
  },
  {
    id: 5,
    name: "TELUGU",
    path: "telugu"
  },
  {
    id: 6,
    name: "MALAYALAM",
    path: "malayalam"
  },
  {
    id: 7,
    name: "ANIMATED",
    path: "animated"
  },
  {
    id: 8,
    name: "DOCUMENTARIES",
    path: "documentaries"
  },
  {
    id: 9,
    name: "WEB SERIES",
    path: "web-series"
  },
  {
    id: 10,
    name: "PUNJABI",
    path: "punjabi"
  }

];
const genreData = [
  {
    id: 1,
    name: "Action",
    path: "action"
  },
  {
    id: 2,
    name: "Adventure",
    path: "adventure"
  },
  {
    id: 3,
    name: "Comedy",
    path: "comedy"
  },
  {
    id: 4,
    name: "Drama",
    path: "drama"
  },
  {
    id: 5,
    name: "Fantasy",
    path: "fantasy"
  },
  {
    id: 6,
    name: "Horror",
    path: "horror"
  },
  {
    id: 7,
    name: "Mystery",
    path: "mystery"
  },
  {
    id: 8,
    name: "Romance",
    path: "romance"
  },
  {
    id: 9,
    name: "Science Fiction",
    path: "sci-fi"
  },
  {
    id: 10,
    name: "Thriller",
    path: "thriller"
  }
];

const yearData = [
  {
    id: 1,
    name: "2024",
    path: "2024"
  },
  {
    id: 2,
    name: "2023",
    path: "2023"
  },
  {
    id: 3,
    name: "2022",
    path: "2022"
  },
  {
    id: 4,
    name: "2021",
    path: "2021"
  },
  {
    id: 5,
    name: "2020",
    path: "2020"
  },
  {
    id: 6,
    name: "2019",
    path: "2019"
  },
  {
    id: 7,
    name: "2018",
    path: "2018"
  },
  {
    id: 8,
    name: "2017",
    path: "2017"
  },
  {
    id: 9,
    name: "2016",
    path: "2016"
  },
  {
    id: 10,
    name: "2015",
    path: "2015"
  }
];

const qualityData = [
  {
    id: 1,
    name: "1080p",
    path: "N/A" // Assuming a placeholder for missing paths
  },
  {
    id: 2,
    name: "720p",
    path: "2023"
  },
  {
    id: 3,
    name: "360p",
    path: "2022"
  },
  {
    id: 4,
    name: "4k",
    path: "2021"
  },
  {
    id: 5,
    name: "8k",
    path: "2020"
  },
  {
    id: 7,
    name: "2k",
    path: "2020"
  }
];





const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <div className=' bg-[#27272A] p-5 grid items-start md:grid-cols-2 grid-cols-1 gap-5'>
          <div>
            <img src="/navlogo.png" alt="logo" />
          </div>
          <div className='flex items-center rounded-lg max-w-sm w-full overflow-hidden md:mt-2 mt-0 border border-gray-600'>
            <input type="text" placeholder='What are you looking for?' className='bg-[#18181B] outline-none p-2 w-full text-sm text-white' />
            <div className='bg-[#3F3F46] text-white p-2 rounded-l-lg'>
              <Search />
            </div>

          </div>
        </div>
        <div className='flex items-center gap-3 px-5 md:px-10 justify-between bg-[#494949] overflow-x-scroll text-white'>

          <div className='flex items-center cursor-pointer gap-1 px-6 py-4 border-gray-400 border-r rounded-lg' onClick={()=>navigate("/")}>
            <img src="https://s.w.org/images/core/emoji/15.0.3/svg/1f3e0.svg" alt="home" width={16} />
            <span className='uppercase tracking-wide font-light mt-1'>home</span>
          </div>


          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1 px-6 py-4 border-gray-400 border-r rounded-lg'>
              <img src="https://s.w.org/images/core/emoji/15.0.3/svg/1f3ac.svg" alt="movies" width={16} />
              <span className='uppercase tracking-wide font-light'>movies</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#494949] border-none p-3">

              {
                movieData.map(({ id, name}) => {
                  return <DropdownMenuItem  className="cursor-pointer text-white p-3" key={id}>{name}</DropdownMenuItem>
                })
              }
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1 px-6 py-4 border-gray-400 border-r rounded-lg'>
              <img src="https://s.w.org/images/core/emoji/15.0.3/svg/1f517.svg" alt="movies" width={16} />
              <span className='uppercase tracking-wide font-light'>genre</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#494949] border-none p-3">

              {
                genreData.map(({ id, name, path }) => {
                  return <DropdownMenuItem className="cursor-pointer uppercase text-white p-3" key={id}>{name}</DropdownMenuItem>
                })
              }
            </DropdownMenuContent>
          </DropdownMenu>


          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1 px-6 py-4 border-gray-400 border-r rounded-lg'>
              <img src="https://s.w.org/images/core/emoji/15.0.3/svg/1f4c5.svg" alt="year" width={16} />
              <span className='uppercase tracking-wide font-light'>year</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#494949] border-none p-3">

              {
                yearData.map(({ id, name, path }) => {
                  return <DropdownMenuItem className="cursor-pointer uppercase text-white p-3" key={id}>{name}</DropdownMenuItem>
                })
              }
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1 px-6 py-4 border-gray-400 border-r rounded-lg'>
              <img src="https://s.w.org/images/core/emoji/15.0.3/svg/2620.svg" alt="quality" width={16} />
              <span className='uppercase tracking-wide font-light'>quality</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#494949] border-none p-3">

              {
                qualityData.map(({ id, name}) => {
                  return <DropdownMenuItem className="cursor-pointer uppercase text-white p-3" key={id}>{name}</DropdownMenuItem>
                })
              }
            </DropdownMenuContent>
          </DropdownMenu>


        </div>
      </div>
    </>
  )
}

export default Navbar
