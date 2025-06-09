
import Btn1 from '../components/button/Btn1'

const HeroSection = () => {
    // bg-[var(--bg-primary-color)]
  return (
   <section className="bg-linear-to-tr from-[#e7cfb4] lg:-top-[83px]    relative  grid grid-cols-1  text-white  text-center md:rounded-b-none max-h-dvh  overflow-hidden h-full"> 
            <img src="https://media.designcafe.com/wp-content/uploads/2022/03/05170338/1-bhk-flat-tv-unit-and-book-cabinet-in-the-bedroom.jpg" alt="" className='w-full ' />
      
            
            <div className="absolute  inset-0 bg-black/50"></div>

            <div className="textarea flex items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 w-full  lg:w-1/2 ">
                    <div className='flex mb-10'>
                        <input type="text" placeholder='search here' className='placeholder-white  flex-1 rounded-full w-full md:w-1/2 bg-transparent outline-2 h-10 px-5 focus:outline-2 outline-[var(--accent-color)] mr-5' />
                        <Btn1>search</Btn1>
                    </div>
                    
                    <h1 className="text-2xl text-center md:text-6xl font-bold leading-tight relative z-[1] ">
                            Find Your Perfect Place to Call <span className="text-[var(--accent-color)]">Home</span>
                    </h1>
                    {/* <div className='h-[2px] my-1 w-full bg-[var(--accent-color)] '></div> */}
                    <p className="text-sm md:text-xl max-w-2xl  text-white relative z-[1] ">
                            Discover handpicked rental homes in top locations — <span className="text-[var(--accent-color)] font-semibold">verified listings</span>, <span className="text-[var(--accent-color)] font-semibold">zero brokerage</span>, and <span className="text-[var(--accent-color)] font-semibold">instant bookings</span>. Renting made effortless.
                   </p>
            </div>
</section>

  )
}

export default HeroSection
