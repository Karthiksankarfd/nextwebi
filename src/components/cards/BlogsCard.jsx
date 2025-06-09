import React from "react";
import { useNavigate } from "react-router-dom";
import rightarrow from "../../assets/icons/rightarrow.png"

const BlogsCard = ({ image, title, content, author, postedOn }) => {
  const navigate = useNavigate();
  const handleNavigate = (param) => {
    console.log();
    navigate(`blogs/${param}`);
  };
  return (
    <div
      onClick={() => handleNavigate(title)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleNavigate(title);
      }}
      role="button"
      tabIndex={0}
      aria-label={`Read blog post titled ${title}`}
      className="blogpost-card-container overflow-hidden bg-[var(--bg-card-color)] shadow-xl rounded-xl flex flex-col w-full h-fit cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
    >
      <div className="img-container relative overflow-hidden">
        <img
          src={image}
          className="h-[200px] object-cover w-full"
          alt={`Thumbnail for blog post titled ${title}`}
        />
      </div>
      <div className="rental-card-container-text-area h-fit p-4 flex flex-col gap-y-1 md:gap-y-2 ">
        <div className="property-info font-[var(--fw-medium)]">{title}</div>
        <div className="property-location flex justify-between text-[12px] md:text-[16px]">
          <span>{postedOn}</span>
          <div className=" bg-[var(--accent-color)] text-white h-10 w-10 text-center rounded-full flex items-center justify-center">
                 <img src={rightarrow} alt="viewblog" className="h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsCard;
