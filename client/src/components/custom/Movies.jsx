import useFetchMovies from '@/hooks/useFetchMovies'
import React from 'react'
import MovieCard from './MovieCard'

const Movies = () => {
  const {movies} = useFetchMovies()
  return (
    <div className='max-w-6xl mx-auto min-h-screen items-start grid gap-8 my-12 lg:grid-cols-5 md:grid-cols-3 grid-cols-3'>
      {
        movies.map((movie)=>{
          return <MovieCard key={movie._id} movie={movie}/>
        })
      }
    </div>
  )
}

export default Movies
