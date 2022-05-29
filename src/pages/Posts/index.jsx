import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Tweet from '../../components/Tweet';
import { comment } from '../../constants/comments'

function PostPage() {

  let [posts, setPosts] = useState([])
  async function getPosts() {
    fetch('https://civileducation.epiccodewizard2.repl.co/posts/all')
      .then(res => res.json())
      .then(resp => setPosts(resp))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='space-y-4 m-4 '>
      {posts.map((i, k) => {
        return (
          <Tweet key={k} comments={i.comments} avatar={i.avatar} body={i.content} pid={i.id} title={i.title} uid={i.userId} />
        )
      })}
      </div>
    </div>
    )
}

export default PostPage

