import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import NavbarComponents from './components/NavbarComponents'
import MainComponents from "./components/MainComponents";
import { Provider } from 'react-redux';
import store from "./store/store";
import { Route, Routes } from "react-router-dom";
import MoreInfo from "./components/MoreInfo";
import HomePage from "./components/HomePage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
 

  return (
    <>
    <Provider store = { store }>
      
      <Routes>
      <Route path='/'element={<HomePage/>} />
      <Route path='/more-info/:cityname'element={<ErrorBoundary><MoreInfo/></ErrorBoundary>} />
      </Routes>
      </Provider>
    </>
  )
}

export default App
