/* eslint-disable no-unused-vars */
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useFetch } from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import LazyImg from '../../../components/lazyLoadImages/LazyImg'


const Banner = () => {

  const [backgroundImg, setBackgroundImg] = useState("");
  
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

 const {url} = useSelector((state)=>state.home);
//  console.log(url.backdrop);

  const {data, loading} = useFetch('/movie/upcoming');
  // https://api.themoviedb.org/3/movie/upcoming
  console.log('Banner=>data', data?.results);
  

  useEffect(()=>{
    // const bg = data?.results[0]?.backdrop_path;     // return backdrop_path of first element of array
        // we want.. backdrop_path of any random elelment..
        // const imgUrl = data?.results[Math.floor(Math.random() * data?.results.length)]?.backdrop_path
        // console.log('BannerbgImgUrl',imgUrl);

        //  we stored first two part of completeUrl inside store
        const imgCompleteUrl =  url?.backdrop + data?.results[Math.floor(Math.random() * data?.results.length)]?.backdrop_path
        // console.log('BannerBgImgCompleteUrl=>', imgCompleteUrl);

      setBackgroundImg(imgCompleteUrl);

  },[data, url?.backdrop]);

  const searchQueryHandler = (e)=>{
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`);
      // <Route path="/search/:query" element={<SearchResult />} />
    }
  }

  return (
    <div className="heroBanner">

            {!loading && (
                <div className="backdrop-img">
                    <LazyImg src={backgroundImg} />
                </div>
            )}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">

                    <span className="subTitle">Laughter. Tears. Thrills. Find it all on</span>
                    <span className="title">MovieX.</span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                    
                </div>
            </ContentWrapper>
        </div>
  )
}

export default Banner;

/* 
    images wll be loaded lazy so... we have created LazyImg componenet which retruns 
    LazyLoadImage from 'react-lazy-load-image-component' library
        import { LazyLoadImage } from "react-lazy-load-image-component";

 */