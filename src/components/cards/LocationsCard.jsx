import React from 'react'

const LocationsCard = ({location , content, image}) => {
  return (
          <div className="locations-cards-container overflow-hidden bg-[var(--bg-card-color)] flex flex-col w-full h-fit rounded-xl">
            <div className="img-container relative overflow-hidden group h-[200px]">
              <img
                src={image}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300"></div>
              <p className="absolute z-10 text-white bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {content.substring(0, 60)}...
              </p>
            </div>
            <h1 className="text-lg font-semibold text-center mt-2 text-[var(--text-primary-color)]">
              {location}
            </h1>
          </div>
  )
}

export default LocationsCard
