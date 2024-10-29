import Navbar from '../components/custom/Navbar'
import Footer from '../components/custom/Footer'
import Movies from '@/components/custom/Movies'
import useFetchMovies from '@/hooks/useFetchMovies'


const Home = () => {
 
  const { movies, setMovies } = useFetchMovies()
  
  return (
    <>
      <Navbar />
      <Movies movies={movies} />
      <Footer />
    </>
  )
}

export default Home
