import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel from "../../../components/carousel/Carousel";

import { useState } from "react";
import { useFetch } from '../../../hooks/useFetch';

const Trending = () => {

  const [endpoint, setEndpoint] = useState("day");

  const {loading, data } = useFetch(`/trending/movie/${endpoint}`);
  // https://api.themoviedb.org/3/trending/movie/{time_window}
  // {timing windiow } =>   day, week

  // console.log('data',data);

  const onTabChange = (tab)=>{
    setEndpoint(tab === 'Day' ? "day" : "week");
  }
  // onTabChnage => (tab) is from SwitchTab.jsx.. sending data from child to parent
  
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending