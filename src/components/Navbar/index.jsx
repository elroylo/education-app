import React from 'react'
import { useMoralis } from 'react-moralis'
import { ConnectButton } from 'web3uikit'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  let navigate = useNavigate()

  return (
    <div>
      <div class="navbar bg-primary text-primary-content">
        <div class="flex-1">
          <button onClick={() => navigate('/')} class="btn btn-ghost normal-case text-xl">Civil Education</button>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal flex p-0">
            <li>
              <Link to='/posts'>
                Posts
              </Link>
              <Link to='/post/create'>
                Create a Post
              </Link>
              <Link to='/blog'>
                Blogs
              </Link>
              <Link to='/blog/create'>
                Create a Blog
              </Link>
              <ConnectButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

