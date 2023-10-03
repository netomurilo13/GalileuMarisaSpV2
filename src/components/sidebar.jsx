import React, { useState } from 'react';
import './../index.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="sidebar-container">
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
          <ul>
            <li>
              <a href="/" className="menu-link">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/serviços" className="menu-link">
                Serviços
              </a>
            </li>
            <li>
              <a href="/pacientes" className="menu-link">
                Pacientes
              </a>
            </li>
            <li>
              <a href="/data" className="menu-link">
                Data
              </a>
            </li>
          </ul>
        </div>
        <div className={`menu-button ${isOpen ? 'open' : 'closed'}`} onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;