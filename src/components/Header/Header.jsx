import React, {useState} from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuIconClasses = `navmenu ${isOpen ? 'open' : ''}`;

  console.log(menuIconClasses);

  return (
    <header>
      <a href="#" className="logo">
        <img src={logo}></img>
      </a>

      <ul className={menuIconClasses}>
        <li>
          <a className="active" href="#">
            TEST
          </a>
        </li>
        <li>
          <a href="#">TEST</a>
        </li>
        <li>
          <a href="#">TEST</a>
        </li>
        <li>
          <a href="#">TEST</a>
        </li>
        <li>
          <a href="#">TEST</a>
        </li>
      </ul>

      <div
        className="bx bx-menu"
        id="menu-icon"
        onClick={toggleMenu}
      ></div>
    </header>
  );
}

export default Header;
