import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand" href="/">
          Crispy Kitchen
        </Link>

        <div className="d-lg-none">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" href={'/'}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href={'/about'}>
                Story
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/menu">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/news">
                Our Updates
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal"
          >
            Reservation
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
