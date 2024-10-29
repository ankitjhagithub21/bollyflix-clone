import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  return (
    <div className='movie-card overflow-hidden h-fit  cursor-pointer' onClick={()=>navigate(`/movies/${movie._id}`,{state:movie})}>
      <img src={movie.screenshots[1]} alt="thumbnail" className='h-64 object-cover' />
      <div className='bg-[#27272A] p-3  h-32 overflow-hidden'>
        <p className='text-sm text-white text-center'>Download {movie.fullName} {movie.year} {movie.quality} </p>
      </div>
    </div>
  )
}

export default MovieCard
