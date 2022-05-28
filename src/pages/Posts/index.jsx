import React, { useEffect, useState } from 'react';

function PostPage() {

  let [posts, setPosts] = useState([])
  async function getPosts() {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(resp => setPosts(resp))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      {JSON.stringify(posts)}
    </div>
  )
}

export default PostPage