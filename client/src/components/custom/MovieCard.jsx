import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card overflow-hidden cursor-pointer'>
      <img src={movie.screenshots[1]} alt="thumbnail" className='h-64 object-cover' />
      <div className='bg-[#27272A] p-3  pb-10'>
        <p className='text-sm text-white text-center'>Download {movie.fullName} {movie.year} {movie.language} Movie {movie.quality} </p>
      </div>
    </div>
  )
}

export default MovieCard
