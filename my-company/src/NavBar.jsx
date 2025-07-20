import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
      <div className='navbar'>
          <Link to={'/'}><button>Home</button></Link>
          <Link to={'/about'}><button>Home</button></Link>
          <Link to={'/services'}><button>Services</button></Link>
          <Link to={'/contact'}><button>Home</button></Link>
    </div>
  )
}

export default NavBar