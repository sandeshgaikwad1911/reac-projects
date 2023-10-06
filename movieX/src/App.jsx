/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
// import "./App.scss";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch } from "react-redux";
import { getApiConfiguration } from "./features/home/homeSlice";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404PageNotFound/PageNotFound";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();

  /* const apiConfig = () => {
    fetchDataFromApi("/movie/popular") //https://api.themoviedb.org/3/movie/popular
      .then((res) => {
        // console.log('res', res)
        dispatch(getApiConfiguration(res));
      })
      .catch((err) => {
        console.log("error while fetching data", err);
      });
  };
 */
  
  const apiConfig = ()=>{
    fetchDataFromApi('/configuration')   //https://api.themoviedb.org/3/configuration
    // this method returns promise; created in utils/api.js file
    .then((res)=>{
      // console.log('App.js Res', res);
      // console.log('App.js imgBaseUrl=>', res?.images?.secure_base_url)   //....  https://image.tmdb.org/t/p/

      const url = {
        backdrop: res?.images?.secure_base_url + "original",   
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original"
      }
      // created obj here, and storing the url.    'original'  is size of image.

      dispatch(getApiConfiguration(url));
      //  we are storing first two part of img url in redux- store.
    })
    .catch((err)=>{
      console.log('error while fetching data', err)
    })

  }

  useEffect(() => {
    apiConfig();
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


/* 
   In order to generate a fully working image URL, you'll need 3 pieces of data. 
   Those pieces are a base_url, a file_size and a file_path.

   1).The first two pieces can be retrieved by calling the /configuration API
    const res = https://api.themoviedb.org/3/configuration  =>   res?.images?.secure_base_url. => "https://image.tmdb.org/t/p/original"

   2).and the third is the file you're wishing to grab on a particular media object.



   https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
      for images we have above url => 
      original => is file size =>    tmdb has different sizes available to choose from , we have choosen original
      image url => /wwemzKWzjKYJFfCeiB57q3r4Bcm.png

 */