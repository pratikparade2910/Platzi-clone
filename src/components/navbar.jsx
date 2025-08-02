import React from 'react'
import '../components/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">Shopi</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">All</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/clothes">Clothes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/electronics">Electronics</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/furnitures">Furnitures</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/toys">Toys</NavLink>
              </li>


            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <NavLink className="nav-link text-secondary" to="#">pratikparadr74@gmail.com</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-dark" to="/orders">My-Orders</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-dark" to="/account">My-Account</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link text-dark" to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
              </li>
            </ul>
          </div>

        </div>

      </nav>

    </>
  )
}

export default Navbar;
