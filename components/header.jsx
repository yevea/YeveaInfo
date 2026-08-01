import React, { useState } from 'react';

export default function Header() {
  // 1. Creamos el estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 2. Función para alternar el estado (abrir/cerrar)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="woodstore-header">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/">
          <img 
            style={{ width: '100px', height: '25px' }}
            src="/001-vectores/logo-yevea-white.svg"
            alt="madera olivo - logo" 
          />
          <sup style={{ color: '#fff' }}>®</sup>
        </a>
        <div className="d-flex align-items-center gap-2">
          {/* Language switcher dropdown */}
          <div className="dropdown">
            <button 
              className="btn btn-sm dropdown-toggle lang-switcher-btn" 
              type="button"
              id="lang-switcher" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              español
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="lang-switcher">
              <li><a className="dropdown-item active" data-lang="es" href="/es/">español</a></li>
              <li><a className="dropdown-item" data-lang="en" href="/en/">English</a></li>
              <li><a className="dropdown-item" data-lang="fr" href="/fr/">français</a></li>
              <li><a className="dropdown-item" data-lang="de" href="/de/">Deutsch</a></li>
            </ul>
          </div>
          
          {/* 3. Añadimos el evento onClick y actualizamos el atributo aria-expanded */}
          <button 
            type="button" 
            id="hamburger-toggle" 
            className="hamburger-toggle"
            aria-label="Toggle menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 4. Si isMenuOpen es true, se añade la clase 'show' para que se despliegue */}
      <div 
        id="hamburger-menu" 
        className={`hamburger-dropdown ${isMenuOpen ? 'show' : ''}`}
      >
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-home" aria-hidden="true"></i>
              Madera de{" "}Olivo
            </a>
          </li>
          <li>
            <a href="/es/sobre-yevea.html">
              <i className="fa-solid fa-people-group" aria-hidden="true"></i>
              {" "}¿Quienes somos?
            </a>
          </li>
          <li>
            <a href="/es/sobre-yevea.html#contacto">
              <i className="fa-solid fa-address-book" aria-hidden="true"></i>
              {" "}Contacto
            </a>
          </li>
          <li>
            <a href="/es/condiciones-de-venta.html">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              Condiciones de{" "}Venta
            </a>
          </li>
          <li>
            <a href="/es/instrucciones-de-uso.html">
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              Instrucciones de{" "}Uso
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
