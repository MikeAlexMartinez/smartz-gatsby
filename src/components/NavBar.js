import React from 'react'
import {Link} from 'gatsby'
import {FiMenu} from 'react-icons/fi'
import {IoClose} from 'react-icons/io5'

const NavBar = ({toggleNavbar, isActive}) => (
  <header className='sticky bg-white top-0 z-50'>
    <nav aria-label="main navigation">
      <div className="shadow-md">
        <div className="flex items-center justify-between w-full p-4">
          {/* main bar */}
          {/* Logo / Company name */}
          <Link to='/'>
            <h1 className="font-semibold">Smartz Bookkeeping & Accounts</h1>
          </Link>
          {/* links on bigger screens */}
          <div id='navMenu'>
            <div className="hidden md:flex items-center space-x-1">
              <Link to='/about' className="p-2 hover:bg-slate-100 hover:text-sky-600 rounded cursor-pointer">
                About
              </Link>
              <Link to='/services' className="p-2 hover:bg-slate-100 hover:text-sky-600 rounded cursor-pointer">
                Services
              </Link>
              <Link to='#contact' className="py-2 px-4 text-center border-sky-600 border rounded text-sky-600 hover:bg-sky-600 hover:text-white">
                Contact
              </Link>
            </div>
            <button onClick={toggleNavbar} className="md:hidden">
              {isActive ? <IoClose size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
        {/* mobile menu */}
        <div className={`pb-4 text-gray-600 absolute bg-white w-screen${isActive ? '' : " hidden"} shadow-md`}>
          <ul>
            <Link to='/about'>
              <li className="p-4 font-light hover:bg-slate-100 hover:text-sky-600 cursor-pointer">
                About
              </li>
            </Link>
            <Link to='/services'>
              <li className="p-4 font-light hover:bg-slate-100 hover:text-sky-600 cursor-pointer">
                Services
              </li>
            </Link>
            <Link to='#contact'>
              <li className='pl-4 pt-2 pb-0'>
                <button className="py-2 px-4 text-center border-sky-600 border rounded text-sky-600 hover:bg-sky-600 hover:text-white">
                  Contact
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default NavBar
