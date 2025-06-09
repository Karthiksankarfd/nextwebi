import React from 'react';

const USPCard = ({ icon, title, description }) => {
  return (
    <div className="p-2 bg-white rounded-lg lg:flex-1 w-full shadow-md">
      {typeof icon === "string" ? (
        <img className="h-10 w-fit mb-2" src={icon} alt={title} />
      ) : (
        <div className="text-[24px] text-[var(--accent-color)] mb-2">{icon}</div>
      )}
      <h6 className="font-semibold inline-block">{title}</h6>
      <p className="text-xs md:text-sm">{description}</p>
    </div>
  );
};

export default USPCard;
