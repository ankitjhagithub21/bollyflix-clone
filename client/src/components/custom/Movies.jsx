
import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({movies}) => {
  
  return (
    <div className='max-w-6xl mx-auto mb-24 px-5 grid lg:gap-8 gap-5 my-12 lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
      {
        movies.map((movie)=>{
          return <MovieCard key={movie._id} movie={movie}/>
        })
      }
    </div>
  )
}

export default Movies
