import React from "react";
import "../css/Footer.css";

function Footer({ author, year, onNavigate, onGoToPage, openModal }) {
  return (
    <footer className="footer-container">
      {/* Información básica */}
      <div className="footer-info">
        <p>&copy; {year} {author}. Todos los derechos reservados.</p>
      </div>

      {/* Enlaces rápidos */}
      <nav className="footer-links">
        <button className="footer-link" onClick={() => onGoToPage(1)}>
          Inicio
        </button>
        <button className="footer-link" onClick={() => openModal("Capítulos")}>
          Capítulos
        </button>
        <button className="footer-link" onClick={() => openModal("Información")}>
          Acerca de
        </button>
      </nav>

      {/* Redes sociales */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
