import React, { useState } from 'react'
import BlogsCard from '../components/cards/BlogsCard'
import { blogPosts } from '../mockdata/blogPosts'
import Line from '../components/decorative-assets/Line'
import Btn1 from "../components/button/Btn1"
const BlogsSection = () => {
  const [blogs] = useState(blogPosts)
  const [filteredBlogs, setFilteredBlogs] = useState(blogPosts)

  const filterBlogs = (e) => {
    const selectedCategory = e.target.value

    if (selectedCategory === 'All') {
      setFilteredBlogs(blogs)
    } else {
      const filtered = blogs.filter((blog) => blog.category === selectedCategory)
      setFilteredBlogs(filtered)
    }
  }

  return (
    <section className="py-5 px-4 md:px-0">
      <div className="newrental-text-area mx-auto max-w-[1380px] mb-5">
        <h1 className="font-[var(--fw-bold)] text-xl md:text-4xl inline">
          Our Blogs
        </h1>
        <Line />
        <select
          onChange={filterBlogs}
          name="blogcategory"
          id="blogcategory"
          className="inline outline-2 outline-[var(--accent-color)] p-2 mt-2 md:mt-5"
        >
          <option value="All">All</option>
          <option value="Fully Furnished vs Semi Furnished">Fully Furnished vs Semi Furnished</option>
          <option value="Budget Homes">Budget Homes</option>
          <option value="Family-Friendly Rentals">Family-Friendly Rentals</option>
          <option value="Pet-Friendly Homes">Pet-Friendly Homes</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1380px] mx-auto">
        {filteredBlogs.map((blog, i) => (
          <BlogsCard key={i} {...blog} />
        ))} 
      </div>
      <div className="flex justify-center mt-6">
        <Btn1>View Blogs</Btn1>
     </div>
      
    </section>
  )
}

export default BlogsSection
