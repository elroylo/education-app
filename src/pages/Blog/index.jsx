import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function BlogPage() {

  let navigate = useNavigate()
  let [blogs, setBlogs] = useState([])
  async function getBlogs() {
    fetch('https://civileducation.epiccodewizard2.repl.co/blogs/all')
      .then(res => res.json())
      .then(resp => setBlogs(resp))
  }

  async function react(id) {
    fetch(`https://civileducation.epiccodewizard2.repl.co/blogs/rate/${id}`)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='grid w-2/5 m-4 space-y-4'>
      {blogs.map((v, k) => {
  return (
    <div>
      <div class="card w-full items-center justify-center bg-base-100 shadow-xl">
        <img src={v.cover} className='w-full' alt="Shoes" />
        <div class="card-body">
          <h2 class="card-title">{v.title} by {v.userId} </h2>
          <div class="card-actions">
            <button class="btn btn-primary justify-start" onClick={() => navigate(`/blogs/${v.id}`)}>
              Look at this Post
            </button>
            <div class="align-middle justify-center">
              {v.rating} likes
            </div>
            <button class="btn btn-error justify-end" onClick={() => react(v.id)}>
              Like this Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})}
      </div>
    </div>
  )
}

export default BlogPage

