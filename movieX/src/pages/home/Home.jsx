import './style.scss'
import Banner from './banner/Banner'
import Trending from './trending/Trending'
const Home = () => {
  return (
    <div className='home'>
      <Banner/>
      <Trending/>
    </div>
  )
}

export default Home