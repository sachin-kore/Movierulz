import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [value, setValue] = useState('')

  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleSearch = () => {
    navigate('/search')
  }

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left">
          <h1 className="logo">MovieRulz</h1>
          <p className="tagline">
            Watch & Download Telugu Hindi Tamil Malayalam Movies Online Free
          </p>
        </div>
        <div className="right">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            className="search-box"
            value={value}
          />
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          {[
            { name: 'Home', submenu: [] },
            { name: 'Featured', submenu: ['Latest', 'Popular', 'Trending'] },
            { name: 'Bollywood', submenu: ['Action', 'Drama', 'Comedy'] },
            { name: 'Telugu', submenu: ['Action', 'Romantic', 'Comedy'] },
            { name: 'Tamil', submenu: ['Action', 'Drama', 'Historical'] },
            { name: 'Malayalam', submenu: ['Thriller', 'Horror', 'Action'] },
            { name: 'Hollywood', submenu: ['Sci-Fi', 'Action', 'Drama'] },
            { name: 'Dubbed', submenu: ['English', 'Spanish', 'French'] },
            {
              name: 'Others',
              submenu: ['Documentary', 'Short Films', 'Indie'],
            },
            { name: 'Quality', submenu: ['HD', 'Full HD', '4K'] },
          ].map((item) => (
            <li key={item.name} className="navbar-item">
              <a href="/">{item.name}</a>
              {item.submenu.length > 0 && (
                <ul className="dropdown">
                  {item.submenu.map((subItem) => (
                    <li style={{ listStyle: 'none' }} key={subItem}>
                      <a href="/">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
