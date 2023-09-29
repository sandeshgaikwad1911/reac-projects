/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./App.scss";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch} from "react-redux";
import { getApiConfiguration } from "./features/home/homeSlice";

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explore from './pages/explore/Explore'
import  PageNotFound from './pages/404PageNotFound/PageNotFound'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  const dispatch = useDispatch();

  const apiConfig = ()=>{
    fetchDataFromApi('/movie/popular')    //https://api.themoviedb.org/3/movie/popular
    .then((res)=>{
      // console.log('res', res)
      dispatch(getApiConfiguration(res))
    })
    .catch((err)=>{
      console.log('error while fetching data', err)
    })

  }

  useEffect(()=>{
    apiConfig()
  },[]);
  
  return(
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App;
