import React from 'react'
import Line from '../components/decorative-assets/Line'
import platformStats from '../mockdata/platformStats'
import USPCard from '../components/cards/USPCard'
import aboutbg from "../assets/images/aboutbg.jpg"
import Btn1 from '../components/button/Btn1'

const AboutUs = () => {
  return (
 <section className="py-5 px-4 md:px-0" id='about'>
    <div className="newrental-text-area mx-auto max-w-[1380px] mb-5">
        <h1 className='font-[var(--fw-bold)] text-xl  md:text-4xl'>
               About Us
        </h1>
        <Line/>
    </div>
    <div className="flex flex-wrap  gap-5 justify-evenly  max-w-[1380px] mx-auto bg-linear-65 from-orange-500 to-pink-500 p-5 rounded-xl">
            {platformStats.map((item, index)=>{
              return (<USPCard {...item} key={index * 0.4}/>
              )
            }) }
    </div>
      <section className="py-5 md:px-0">
        <div className="newrental-text-area mx-auto max-w-[1380px] mb-5">
            <div className=" mx-auto grid md:grid-cols-2 gap-10 items-center">
                 {/* Left: Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  {/* Image with full coverage */}
                  <img
                    src={aboutbg}
                    alt="about us"
                    className="w-full h-full object-cover"
                  />
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-black/50"></div>
                  {/* Text content over the image */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold">Trusted Rental Service</h3>
                    <Line />
                    <p className="text-xs md:text-sm my-2 max-w-2xl">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam animi magnam in alias. Ipsa natus commodi incidunt? Exercitationem tempore sapiente iste aliquid ipsam mollitia harum eaque repellat, aspernatur dolorem error.
                    </p>
                    <div>
                      <Btn1>Know More</Btn1>
                    </div>
                  </div>
                </div>

            {/* Right: Text */}
            <div>
              <h2 className=" md:text-4xl font-bold ">
                Who We Are <span className='text-[var(--accent-color)] '>?</span>
              </h2>
              
              <p className="   text-[var(--text-secondary)]  mb-4">
                At <span className="text-[var(--accent-color)] font-semibold">RentNest</span>, we believe finding a perfect home should be simple, secure, and stress-free. We’re a passionate team dedicated to connecting people with curated rental properties that match their needs and lifestyle.
              </p>
              <p className="">
                With verified listings, zero brokerage, and instant booking support, our platform ensures a seamless house-hunting experience across Bangalore's top locations.
              </p>
            </div>
          </div>
        </div>
    </section>
</section>
  )
}

export default AboutUs
