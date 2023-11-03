import './style.scss'
import { useFetch } from '../../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const DetailsBanner = () => {
  const {id, mediaType} = useParams();
  // <Route path="/:mediaType/:id" element={<Details />} />
  const {data, loading} = useFetch(`/${mediaType}/${id}`);
  console.log('data', data)
  return (
    <div>DetailsBanner</div>
  )
}

export default DetailsBanner