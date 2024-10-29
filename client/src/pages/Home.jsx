import Navbar from '../components/custom/Navbar'
import MovieCard from '../components/custom/MovieCard'
import React from 'react'
import Footer from '../components/custom/Footer'

const Home = () => {
  return (
   <>
   <Navbar/>
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
    <Footer/>
   </>
  )
}

export default Home
