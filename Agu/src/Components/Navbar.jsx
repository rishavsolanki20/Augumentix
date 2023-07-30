import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchInput, setShowSearchInput] = useState(false)
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNav = () => {
    setActive('navBar')
  }

  const handleSearch = (event) => {
    event.preventDefault()
    // handle the search query here
    console.log(searchQuery)
  }

  return (
    <section className="navBarSection">
      <header className="header1 flex">
        <div className="logoDiv">
          <a href="/" className="logo1 flex">
            <h1> LUCA </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">Men</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Women</a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">Accessories</a>
            </li>
            <li className="navItem">
              <a href="/user" className="navLink">Beauty</a>
            </li>
            
          </ul>
        </div>
        {/* Search bar */}
        {showSearchInput && (
          <li className='search' onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </li>
        )}

        {/* Search icon */}
        <li onClick={() => setShowSearchInput(!showSearchInput)}>
          <i className="fas fa-search"></i>
        </li>
            <li className="acc">
              <a href="#">My Account</a>
            </li>

      </header>

    </section>
  )
}

export default Navbar
