import { useEffect, useState } from "react"


const useFetchMovies = () => {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        const fetchMovies = async() =>{
            try{

                const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/movies`)
                const data = await res.json()
                if(data.success){
                    setMovies(data.movies)
                }
            }catch(error){
                console.log(error)
            }
        }
        fetchMovies()
    },[])
    return {movies}
}

export default useFetchMovies
