import React from 'react'
import { rentalListings } from '../mockdata/properties'
import RentalShortInfoCard from '../components/cards/RentalShortInfoCard'
import Btn1 from '../components/button/Btn1'
const NewRentals = () => {
  return (
 <section className=" px-4 md:px-5 mt-5" >
    <div className="newrental-text-area mx-auto max-w-[1380px] mb-5">
        <h1 className='font-[var(--fw-bold)] text-xl  md:text-4xl new-flats'>
            New Flats Available for Rent in Bangalore
        </h1>
        <div className='w-[200px] h-1 bg-[var(--accent-color)]'></div>
        <span className=' text-sm md:text-lg'>
            Choose your preferred choice of flat for rent in Bangalore
        </span>
    </div>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1380px] mx-auto ">
    {rentalListings.map((property) => (
      <RentalShortInfoCard key={property.id} {...property} />
    ))}
  </div>

    <div className="mx-auto w-fit mt-5" >
        <Btn1>View More</Btn1>
    </div>
  

</section>


  )
}

export default NewRentals
