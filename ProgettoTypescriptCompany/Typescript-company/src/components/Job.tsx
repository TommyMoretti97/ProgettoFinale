import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux'; 
import { FavoritesActionTypes, addToFavorites } from '../actions/favoriteActions';
import { FaHeart } from 'react-icons/fa';

interface JobProps {
  data: {
    _id: string;
    company_name: string;
    url: string;
    title: string;
    // Aggiungi altri tipi necessari per i dati del lavoro
  };
}

const Job: React.FC<JobProps> = ({ data }) => {
  const dispatch: Dispatch<FavoritesActionTypes> = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(data.company_name));
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={6}>
        <Link to={`/${data.company_name}`} className='pe-4'>
          {data.company_name}
        </Link>
        <button onClick={handleAddToFavorites} className='btn btn-outline-info'>
          <FaHeart /> Aggiungi ai preferiti
        </button>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
