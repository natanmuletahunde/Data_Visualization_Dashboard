// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Data Visualization Dashboard</h1>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <FaBars size={24} />
        </button>
        <div
          className={`md:flex md:items-center ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="md:flex md:space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Dashboards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Settings
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
            <FaUserCircle size={24} className="mr-2" />
            <span>PIV NATI</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;