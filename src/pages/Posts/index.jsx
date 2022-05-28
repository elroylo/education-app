import React, { useEffect, useState } from 'react';

function PostPage() {
  async function getPosts() {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(res=> console.log(response))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
    </div>
  )
}

export default PostPage