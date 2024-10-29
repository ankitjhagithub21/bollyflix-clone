import MovieCard from '../components/custom/MovieCard'
import React from 'react'

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto grid gap-8 my-12 lg:grid-cols-5 md:grid-cols-3 grid-cols-3'>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
  )
}

export default Home
