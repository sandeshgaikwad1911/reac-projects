import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
const Root = () => {
  return (
    <div className='h-full flex flex-col'>
        <Navbar/>
            <Outlet/>
    </div>
  )
}

export default Root