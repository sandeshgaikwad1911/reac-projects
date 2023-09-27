/* eslint-disable no-unused-vars */

import { useContext } from "react"
import { YoutubeContext } from "../../contex/YoutubeContext"
import VideoCard from '../VideoCard';

const Main = () => {
    const {loading, searchResults} =  useContext(YoutubeContext);
    console.log('searchRESULT',searchResults)
  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {
            !loading &&  searchResults.map((item,i)=>{
              return(
                    <VideoCard 
                      key={i}
                      video={item?.video}
                      />
              )
            })
          }
        </div>
    </div>
  )
}

export default Main