import Footer from '@/components/custom/Footer'
import Navbar from '@/components/custom/Navbar'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const MovieDetails = () => {
    const location = useLocation()
    const movie = location.state
  return (
    <>
      <Navbar/>
      <div className='max-w-5xl mx-auto p-5 text-white'>
        <h2 className='text-2xl my-5'>{movie.fullName}</h2>
        <h2 className='text-xl'>Story</h2>
        <p className='mt-5 tracking-wide'>{movie.storyline}</p>
        <div className='flex flex-col gap-5 items-start my-5'>
        {
            movie.screenshots.map((s,idx)=>{
                return <img src={s} key={idx} alt={"screenshot"} className='' />
            })
        }
        </div>
      
        <ul className=' flex flex-col gap-2 my-10'>
            <li className='border-b p-2 grid grid-cols-2'><span>Title </span>{movie.fullName}</li>
            <li className='border-b p-2 grid grid-cols-2'><span>Release Year </span> {movie.releasedYear}</li>
            <li className='border-b p-2 grid grid-cols-2'><span>Genre </span> {movie.genre.join(',')}</li>
            <li className='border-b p-2 grid grid-cols-2'><span>Language </span> {movie.language}</li>
            <li className='border-b p-2 grid grid-cols-2'><span>Size </span> {movie.size}</li>
            <li className='border-b p-2 grid grid-cols-2'><span>Quality </span> {movie.quality}</li>
            <li className='border-b p-2 grid grid-cols-2'><span>Movie Type </span> {movie.movieType}</li>
        </ul>
        <Button className="bg-cyan-500 hover:bg-cyan-700">
            <a href={movie.downloadLinks[0]} target='_blank'>Download Now</a>
        </Button>
      </div>
      
      <Footer/>
    </>

  )
}

export default MovieDetails
