import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

function BlogPage() {

  let navigate = useNavigate()
  let [blogs, setBlogs] = useState([])
  async function getBlogs() {
    fetch('https://civileducation.epiccodewizard2.repl.co/blogs/all')
      .then(res => res.json())
      .then(resp => setBlogs(resp.posts))
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
              <img src="https://api.lorem.space/image/shoes?w=400&h=225" className='w-full' alt="Shoes" />
              <div class="card-body">
                <h2 class="card-title">{v.title} by {v.userId} </h2>
                <p>{v.content}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary" onClick={() => navigate(`/blogs/${v.id}`)}>Look at this Post </button>
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