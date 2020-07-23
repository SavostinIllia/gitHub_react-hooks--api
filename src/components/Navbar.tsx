import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">GitHub Search</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home Page
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Information
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
