import React from 'react'
import LocationsCard from '../components/cards/LocationsCard'
import { locationPromos } from '../mockdata/locationsPromos'
import Line from '../components/decorative-assets/Line'
const Locations = () => {
  return (
 <section className="py-5 px-4 md:px-0">
    <div className="newrental-text-area mx-auto max-w-[1380px] ">
        <h1 className='font-[var(--fw-bold)] text-xl  md:text-4xl location'>
            Locations That Are Near By you
        </h1>
        <Line/>
        <span className=' text-sm md:text-lg'>
            Locations listed below are 
        </span>
    </div>
  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5 max-w-[1380px] mx-auto ">
        {locationPromos.map((location, index)=>{
            return(
                <LocationsCard {...location} key={index * 0.5}/>
            )
        })}
        
  </div>
</section>
  )
}

export default Locations
