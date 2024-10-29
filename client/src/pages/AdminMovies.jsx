import AdminNav from '@/components/custom/AdminNav'
import useFetchMovies from '@/hooks/useFetchMovies'
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Trash2 } from 'lucide-react'

const AdminMovies = () => {
  const { movies, setMovies } = useFetchMovies()
  return (
    <div className='max-w-6xl mx-auto p-5 text-white'>
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
            {
              movies.map((movie, index) => {
                return <TableRow key={movie._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{movie.fullName}</TableCell>
                  <TableCell>{movie.releasedYear}</TableCell>
                  <TableCell>
                    <span className='float-right'> <Trash2 /></span>
                  </TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>

      </div>
    </div>
  )
}

export default AdminMovies
