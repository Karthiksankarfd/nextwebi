import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../mockdata/blogPosts'

const BlogsPage = () => {
  const { title } = useParams()
  const decodedTitle = decodeURIComponent(title)

  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const matchedBlog = blogPosts.find(blog => blog.title === decodedTitle)
    setBlog(matchedBlog)
  }, [decodedTitle])

  if (!blog) return <div className="text-center py-10">Blog not found.</div>

  return (
    <main className='max-w-[1380px] mx-auto w-full p-5'>
      <h1 className='text-2xl font-bold'>{blog.title}</h1>
      <p className='text-sm text-gray-500'>By {blog.author} on {blog.date}</p>
      <img src={blog.image} alt={blog.title} className='w-full max-h-[400px] object-cover my-5 rounded-md' />
      <p className='text-md leading-relaxed'>{blog.content}</p>
    </main>
  )
}

export default BlogsPage
