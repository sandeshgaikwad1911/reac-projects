import Banner from './banner/Banner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import './style.scss'
const Home = () => {
  return (
    <div className='home'>
      <Banner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home