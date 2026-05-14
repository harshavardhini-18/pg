import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">PG<span>Finder</span></a>
        </div>
        
        {/* Hamburger Menu (Mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className={menuOpen ? 'nav-buttons active' : 'nav-buttons'}>
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
