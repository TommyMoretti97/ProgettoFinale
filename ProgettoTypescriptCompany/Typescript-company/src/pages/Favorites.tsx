
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { REMOVE_TO_FAVORITES } from '../actions/favoriteActions';
import { FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import SpinnerWait from '../components/SpinnerWait';
import { RootState } from '../reducers/rootReducer';

const Favorites = () => {
  
  const [loading, setLoading] = useState(true); //stato di partenza true per visualizzarlo

  useEffect(() => {
    // Simula un ritardo nell'ottenimento dei dati (puoi rimuovere questo blocco nel tuo caso reale)
    setTimeout(() => {
      setLoading(false); // dopo il ritardo setto il loading su false per (nascondere) lo spinner wait
    }, 2000); // Simulo ritardo per vedere a schermo lo spinner 
  }, []);

  const favoriteCompanies = useSelector((state: RootState) => state.favorites.favoriteCompanies);

  const dispatch = useDispatch();
// useSelector permette a un componente di estrarre dati dallo stato redux
// in questo caso favoritesCompanies conterrà il valore dello stato redux e qualsiasi modifica si rifletterà nella variabile favoritesCompanies

  return (
    <div className='w-50 mx-auto text-center'>
      <h1>Aziende Preferite:</h1>
      <Link to={'/'} className='btn btn-info mb-4'>Ritorna alla Home</Link>
      <br />
      {loading ? ( 
        <SpinnerWait />// Mostra lo spinner se loading è true
      ) : (
      <ul className='list-group my-4'>
        {favoriteCompanies.length > 0?(
           favoriteCompanies.map((company:string, index:number) => (
          <li key={index} className='w-50 border-dark mx-auto list-group-item '>   
            {company} 
            <div className='d-flex justify-content-end'>           
            <button onClick={() => dispatch({ type: REMOVE_TO_FAVORITES, payload:company })} className='btn btn-outline-danger'><FaTrash /></button>
            </div>
            
          </li>
        ))
      ) :(
        <li>Non ci sono preferiti</li>
      )}
      </ul>
      )}
    </div>
  );
};

export default Favorites;