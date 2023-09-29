/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import './style.scss'
import { useEffect, useState } from 'react'

import { useFetch } from '../../../hooks/useFetch';

const Banner = () => {

  const [background, setBackground] = useState("");
  console.log('Banner=>background', background);
  
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {data, loading} = useFetch('/movie/upcoming');
  // https://api.themoviedb.org/3/movie/upcoming

  console.log('Banner=>data', data?.results);


  useEffect(()=>{
    // const bg = data?.results[0]?.backdrop_path;     // return backdrop_path of first element of array
        // we want.. backdrop_path of any random elelment..
    const bg = data?.results[Math.floor(Math.random() * data?.results.length)]?.backdrop_path
    // console.log('bg',bg)
    setBackground(bg);
  },[data]);

  const searchQueryHandler = (e)=>{
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`);
      // <Route path="/search/:query" element={<SearchResult />} />
    }
  }

  return (
    <div className='banner' >

      <div className="wrapper">

          <div className="bannerContent">

              <span className="title">Welcome</span>
              <span className="subTitle">Hundreds of movies,Tv shows</span>
              <div className="searchInput">
                <input type="text" placeholder="Search for a movie or TV show"
                  onChange={(e)=>setQuery(e.target.value)}
                  onKeyUp={searchQueryHandler}
                />
                <button>Search</button>
              </div>

          </div>

      </div>

    </div>
  )
}

export default Banner