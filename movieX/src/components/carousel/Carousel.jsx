/* eslint-disable react/prop-types */

import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill,} from "react-icons/bs";
import { useSelector } from "react-redux";
import PosterFallbackImg from '../../images/no-poster.png'; 
import LazyImg from "../lazyLoadImages/LazyImg"
import CircleRating from '../circleRating/CircleRating'
import dayjs from 'dayjs'
import Genres from '../genres/Genres'
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Carousel = ({ data, loading }) => {
  // console.log("CarouselData", data);

  const carouselSliding = useRef();
  const navigate = useNavigate();

  const navigation = (direction)=>{
    const sliding = carouselSliding.current
    // console.log('slidign', sliding);  each carousel card
    const scrollAmout = direction === "left" ? sliding.scrollLeft - (sliding.offsetWidth + 20) : sliding.scrollLeft + (sliding.offsetWidth + 20);
    // 
    sliding.scrollTo({
      left: scrollAmout,
      behavior: 'smooth'
    })
  }

  const {url} = useSelector((state)=>state.home);

// loading skeleton
  const skItem = () => {
    return (
        <div className="skeletonItem">
             <div className="posterBlock skeleton"></div>   {/* skeleton is from index.css  */}
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );
};



  
  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {
          !loading ? (
            <div className="carouselItems" ref={carouselSliding} >
              {
                  data?.map((item)=>{
                    const posterUrl = item?.poster_path ? url.poster + item?.poster_path : PosterFallbackImg;
                    return(
                      <div className="carouselItem" key={item?.id}
                      onClick={() =>navigate(`/${item.media_type}/${item.id}`)}
                      >
                        <div className="posterBlock">
                          <LazyImg src={posterUrl}/>
                          <CircleRating rating={item?.vote_average.toFixed(1)}/>
                          <Genres data={item?.genre_ids.slice(0,2)} />
                        </div>
                        <div className="textBlock">
                          <span className="title">
                            {item?.title || item?.name}
                            {/* for movies we have item?.title but for tv we have item?.name from api*/}
                          </span>
                          <span className="date" >
                            {dayjs(item?.release_date || item?.first_air_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      </div>
                    )
                  })
              }
            </div>
          ) : (
            // <span>Loading...</span>
            <div className="loadingSkeleton">
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
            </div>
          )
        }
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
