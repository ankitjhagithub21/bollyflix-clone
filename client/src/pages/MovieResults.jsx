import Footer from '@/components/custom/Footer'
import Movies from '@/components/custom/Movies'
import Navbar from '@/components/custom/Navbar'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieResults = () => {
    const { title } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMoviesByTitle = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/movies/title/${title}`)
                const data = await res.json()
                if (data.success) {
                    setMovies(data.movies)
                }else{
                    setMovies([])
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchMoviesByTitle()
    }, [title])

    return (
        <>
            <Navbar />
            <div className='min-h-screen max-w-6xl mx-auto'>
                {
                    movies.length === 0 ? <h2 className='text-center text-white my-10 text-3xl font-semibold'>No Movie Found</h2> : <Movies movies={movies} />

                }
            </div>
            <Footer />
        </>
    )
}

export default MovieResults
