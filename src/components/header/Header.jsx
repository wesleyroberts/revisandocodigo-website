import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light ">
      <div className="container">
        <a className="navbar-brand text-pr fs-2" href="#home">
          <strong>Revisando Código</strong>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item fs-5 fw-medium">
              <a className="nav-link text-dark" href="#home">Início</a>
            </li>
            <li className="nav-item fs-5 fw-medium">
              <a className="nav-link text-dark" href="#videos">Vídeos</a>
            </li>
            <li className="nav-item fs-5 fw-medium">
              <a className="nav-link text-dark" href="#about">Sobre</a>
            </li>
            <li className="nav-item fs-5 fw-medium">
              <a className="nav-link text-dark" href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}