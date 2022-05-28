import React from 'react'
import { useMoralis } from 'react-moralis'
import { ConnectButton } from 'web3uikit'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div class="navbar bg-primary text-primary-content">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Civil Education</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a>Posts</a></li>
            <div class="navbar-end">
              <a class="btn">Connect</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

