import Navbar from '../components/custom/Navbar'
import Footer from '../components/custom/Footer'
import Movies from '@/components/custom/Movies'
import useFetchMovies from '@/hooks/useFetchMovies'
import Loader from '@/components/custom/Loader'



const Home = () => {
 
  const { movies, setMovies,loading } = useFetchMovies()
  
  return (
    <>
      <Navbar />
      {
        loading ? <Loader/> : <Movies movies={movies} />
      }
      <Footer />
    </>
  )
}

export default Home
