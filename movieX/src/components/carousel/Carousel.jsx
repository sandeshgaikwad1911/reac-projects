/* eslint-disable react/prop-types */

import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill,} from "react-icons/bs";
import { useSelector } from "react-redux";
import PosterFallbackImg from '../../images/no-poster.png'; 
import LazyImg from "../lazyLoadImages/LazyImg"
import CircleRating from '../circleRating/CircleRating'

// eslint-disable-next-line react/prop-types
const Carousel = ({ data, loading }) => {
  console.log("CarouselData", data);

  const navigation = ()=>{

  }

  const {url} = useSelector((state)=>state.home);

  
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
            <div className="carouselItems">
              {
                data?.map((item)=>{
                  const posterUrl = item?.poster_path ? url.poster + item?.poster_path : PosterFallbackImg;
                  return(
                    <div className="carouselItem" key={item?.id}>
                      <div className="posterBlock">
                        <LazyImg src={posterUrl}/>
                        <CircleRating rating={item?.vote_average.toFixed(1)}/>
                      </div>
                      <div className="textBlock">
                        <span className="title">
                          {item?.title || item?.name}
                          {/* for movies we have item?.title but for tv we have item?.name from api*/}
                        </span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          ) : (
            <span>
              Loading...
            </span>
          )
        }
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
