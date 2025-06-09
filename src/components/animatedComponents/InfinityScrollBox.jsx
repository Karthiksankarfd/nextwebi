import React from 'react'
import aboutUsData from '../../mockdata/aboutUsData'
const InfinityScrollBox = () => {
  return (
    <div  className='py-2 mx-auto max-w-[1380px] w-full bg-white flex items-center lg:mb-5 relative overflow-hidden mask-gradient-bottom'> 
 
        <ul  className='flex infinitescroll-animation '>
            {aboutUsData.map((item , index) => (
                <li aria-hidden="true"
                key={index + 10}
                className="p-4 bg-white text-black rounded shadow min-w-[200px] text-center ml-4 flex flex-col items-start"
                >
                    <div>
                        <img src={item.icon} alt={item.achivement} className='h-5 md:h-7'/>
                        <span>{item.achivement}</span>
                    </div>
                </li>
            ))}
        </ul>    

       <ul aria-hidden="true" className='flex infinitescroll-animation ' >
        {aboutUsData.map((item, index) => (
            <li aria-hidden="true"
            key={index + 10}
            className="p-4 bg-white text-black rounded shadow min-w-[200px] text-center ml-4 flex flex-col items-start"
            >
                <div>
                    <img src={item.icon} alt={item.achivement} className='h-5 md:h-7' />
                    <span>{item.achivement}</span>
                </div>
            
            </li>
        ))}
    </ul> 
    </div>
    


  )
}

export default InfinityScrollBox
