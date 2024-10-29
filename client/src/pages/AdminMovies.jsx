import AdminNav from '@/components/custom/AdminNav';
import useFetchMovies from '@/hooks/useFetchMovies';
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Trash2 } from 'lucide-react';
import toast  from 'react-hot-toast'; // Ensure react-toastify is installed

const AdminMovies = () => {
  const token = localStorage.getItem('token') || null
  const { movies, setMovies } = useFetchMovies();

  // Function to handle deletion
  const handleDelete = async (id) => {
    if(!token) return toast.error("Please login.")
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/movies/${id}`, {
        method: 'DELETE',
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });

      const data = await response.json()

      if (data.success) {
        // Remove the deleted movie from state
        setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
        toast.success(data.message);
      } else {
        toast.error('Failed to delete the movie');
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
      toast.error('An error occurred while deleting the movie');
    }
  };

  return (
    <div className="max-w-6xl mx-auto text-white">
      <AdminNav />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.No</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.map((movie, index) => (
              <TableRow key={movie._id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{movie.fullName}</TableCell>
                <TableCell>{movie.releasedYear}</TableCell>
                <TableCell>
                  <span 
                    className="float-right cursor-pointer" 
                    onClick={() => handleDelete(movie._id)}
                  >
                    <Trash2 />
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminMovies;
