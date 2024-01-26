import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../actions/favoriteActions';
import { FaHeart } from "react-icons/fa"

const Job = ({ data}) => {
  const dispatch = useDispatch(); 

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(data.company_name));
    console.log(data.company_name)
  }; // questa funzione permette di salvare nei preferiti il nome della compagnia(azienda) che andremo cliccare il bottone
  return (
    
    
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    
    <Col xs={6}>
      <Link to={`/${data.company_name}`} className='pe-4'>{data.company_name}</Link>
      <button onClick={handleAddToFavorites} className='btn btn-outline-info'> <FaHeart/>Add to favorites</button>
    </Col>
    <Col xs={6}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  
  
  )
}

export default Job;

