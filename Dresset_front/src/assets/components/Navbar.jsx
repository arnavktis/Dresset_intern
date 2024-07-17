import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header>
      <nav style={styles.nav}>
        <div style={styles.logoContainer}>
          {/* <img src={logo} alt="DRESSET Logo" style={styles.logo} /> */}
        </div>
        <div style={styles.navLinks}>
          <Link to="#HeroSection" style={styles.navLink}>
            Home
          </Link>
          <Link to="#About" style={styles.navLink}>
            About
          </Link>
          <Link to="#services" style={styles.navLink}>
            Services
          </Link>
          <Link to="#pricing" style={styles.navLink}>
            Pricing
          </Link>
        </div>
        <div style={styles.actions}>
          <button style={styles.searchButton}>
            <FaSearch style={styles.icon} />
            Search Our Service
          </button>
          <button style={styles.iconButton}>
            <FaMoon style={styles.icon} />
          </button>
          <div style={styles.profile}>
            {/* <img src={profilePic} alt="Profile" style={styles.profilePic} /> */}
            <button style={styles.dropdownButton}>▼</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    right: "20px",
    left: "20px",
    padding: "10px 29px",
    backgroundColor: "#E0E0E0",
    position: "fixed",
    // width: "calc(100% - 58px)",
    height: "64px",
    top: "20px",
    zIndex: 1000,
    background: "rgba(217, 217, 217, 0.4)",
    borderBottom: "1px solid #E0E0E0",
    backdropFilter: "blur(7.5px)",
    borderRadius: "8px",
    boxSizing: "border-box",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    textDecoration: "none",
    color: "#000",
    fontWeight: "bold",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  searchButton: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    border: "1px solid #000",
    borderRadius: "20px",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  icon: {
    marginRight: "5px",
  },
  iconButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  profilePic: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  dropdownButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default Navbar;