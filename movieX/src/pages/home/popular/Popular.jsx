import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";

import { useState } from "react";
import { useFetch } from '../../../hooks/useFetch';

const Popular = () => {

  const [endpoint, setEndpoint] = useState("movie");

  const {loading, data } = useFetch(`/${endpoint}/popular`);
  // https://api.themoviedb.org/3/movie/popular

  // console.log('data',data);

  const onTabChange = (tab)=>{
    setEndpoint(tab === 'Movies' ? "movie" : "tv");
  }
  // onTabChnage => (tab) is from SwitchTab.jsx.. sending data from child to parent
  
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default Popular