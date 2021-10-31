import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary ">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand text-light ps-5 fw-bold  fs-4" to="/home">Book Land</Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link me-5 active text-light  fs-6 a" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-5 text-light  fs-6 a" to="/reading-list">Reading List</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;