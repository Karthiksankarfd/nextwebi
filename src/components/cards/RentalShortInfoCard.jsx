import React from 'react'
import areasq from "../../assets/icons/areasq.png"
import bathroom from "../../assets/icons/bathroom.png"
const RentalShortInfoCard = ({  id,
  rentAmount,
  imageUrls,
  availableFrom,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  furnishing}) => {
  return (
    <div className='rental-card-container  overflow-hidden bg-[var(--bg-card-color)] shadow-xl rounded-xl flex flex-col w-full  h-fit' key={id}  
      role="button"
      tabIndex={0}
      aria-label={`New Rentals`}
      >
            <div className='img-container relative  overflow-hidden '>
                    <span className="absolute py-1 px-2 top-[5%] left-[5%] text-xs rounded-full bg-[var(--bg-card-color)]">Available From : {availableFrom}</span>
                    <img src={imageUrls[1]} className='h-[200px] object-cover w-full' alt="" />
            </div>

            <div className='rental-card-container-text-area h-fit p-4   flex flex-col gap-y-1 md:gap-y-2 text-[var(--responsive-caption)]'>
                    <div className='property-info font-[var(--fw-medium)]'>
                           {`${furnishing} ${type} Apartment for Rent in ${location} `}
                    </div>

                    <div className='property-location flex justify-between text-[12px] md:text-[16px]' >
                        <span >{location}</span>
                        <span className=''>{rentAmount}</span>
                    </div>

                    <div className='iconic-infos flex justify-between text-[12px] md:text-[14px] '>
                            <div className='flex items-end gap-x-1'>
                                <svg className='inline' xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 20 21" width="20" height="21">
	                                <title>bed-icon</title>
	                                     <path class="s0" d="m16.7 8.5v-5.5h-1.7v1.7h-10v-1.7h-1.7v5.5c-1 0.5-1.6 1.6-1.6 2.8v3.4q0 0.3 0.2 0.6 0.3 0.2 0.6 0.2h0.8v3.3h1.7v-3.3h10v3.3h1.7v-3.3h0.8q0.3 0 0.6-0.2 0.2-0.3 0.2-0.6v-3.4c0-1.2-0.6-2.3-1.6-2.8zm-1.7-2.2v1.7h-4.2v-1.7zm-10 0h4.2v1.7h-4.2zm11.7 7.5h-13.3v-2.5c0-0.9 0.7-1.7 1.6-1.7h10c1 0 1.7 0.8 1.7 1.7z"/>
                                  </svg>
                                
                                <span>{bedrooms} Beds</span>
                            </div>
                            <div className='flex items-end gap-x-1'>
                                <img src={bathroom} alt="bathrooms"  className='h-5'/>
                                <span>{bathrooms} Baths</span> 
                            </div>

                            <div className='flex items-end gap-x-1'>
                                <img src={areasq} alt="area" className='h-5'/>
                                <span>{area}</span>
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default RentalShortInfoCard
