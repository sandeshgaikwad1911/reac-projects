/* eslint-disable react/prop-types */
import './style.scss'
import { useState} from 'react';

const SwitchTabs = ({data, onTabChange}) => {
  // console.log('tab', data,)   // ['day', 'week']

  const [selectedTab, setSelectedTab] = useState(0);
  // console.log('selectedTab', selectedTab) // 0 or 1


  const activeTabs= (tab, index)=>{
    setSelectedTab(index);
    onTabChange(tab, index);
  }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
          {
              data.map((tab, index)=>{
                return(
                  <span key={index} className={`tabItem ${selectedTab === index ? 'active': ''}`} onClick={()=>activeTabs(tab,index)}>
                    {tab}
                  </span>
                )
              })
          }
      </div>
    </div>
  )
}

export default SwitchTabs