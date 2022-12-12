import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {
	return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid d-flex justify-content-between">
        <Link to="" class="navbar-brand" href="#">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Pricing
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hello
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="dropdownMenu2"
              >
                <FaRegUserCircle></FaRegUserCircle>
              </Link>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <Link class="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;