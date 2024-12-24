import React, { useState } from "react";
import "../css/Header.css";

function Header({ title, onPrevious, onNext, currentPage, totalPages, onGoToPage, activeModal, openModal, closeModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeModal, setActiveModal] = useState(null); // Controla qué modal mostrar

  // const handleMenuClick = (option) => {
  //   if (option === "Inicio") {
  //     onGoToPage(1); // Lleva al capítulo inicial
  //     setActiveModal(null); // Cierra cualquier modal
  //   } else {
  //     setActiveModal(option); // Abre el modal correspondiente
  //   }
  // };

  // const closeModal = () => {
  //   setActiveModal(null);
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuOptionClick = (callback) => {
    callback(); // Ejecuta la acción asociada a la opción (ir a página, abrir modal, etc.)
    setIsMenuOpen(false); // Cierra el menú
  };
  return (
    <header className="header-container">
      {/* Título del cómic */}
      <div className="header-title">
        <h1>{title}</h1>
      </div>

      {/* Navegación entre páginas */}
      <nav className="header-navigation">
        <button
          className="nav-button"
          onClick={onPrevious}
          disabled={currentPage === 1}
        >
          ◀ Anterior
        </button>
        <span className="page-info">
          Página 
          <div>{currentPage} / {totalPages}</div>
        </span>
        <button
          className="nav-button"
          onClick={onNext}
          disabled={currentPage === totalPages}
        >
          Siguiente ▶
        </button>
      </nav>

      {/* Menú lateral */}
      <div className="header-menu">
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        {isMenuOpen && (
          <div className="menu-options">
            <ul>
              {/* <li onClick={() => onGoToPage(1)}>Inicio</li> */}
              <li onClick={() => handleMenuOptionClick(() => onGoToPage(1))}>Inicio</li>
              <li onClick={() => handleMenuOptionClick(() => openModal("Capítulos"))}>Capítulos</li>
              <li onClick={() => handleMenuOptionClick(() => openModal("Información"))}>Información</li>
              <li onClick={() => handleMenuOptionClick(() => openModal("Configuración"))}>Configuración</li>
            </ul>
          </div>
        )}
      </div>
      {/* Modales */}
      {activeModal === "Capítulos" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Capítulos Disponibles</h2>
            <div className="chapters-list">
              {/* <button onClick={() => {onGoToPage(1) closeModal}}>Capítulo 1</button> */}
              {/* <button onClick={() => handleMenuClick("Inicio")}>Capítulo 1</button> */}
              {/* Cada card representará un capítulo */}
              <div className="chapter-card" onClick={() => { onGoToPage(1); closeModal(); }}>
                <img
                  src="./img/pagina_1_cuadro_1.png"
                  alt="Portada Capítulo 1"
                  className="chapter-image"
                />
                <h3 className="chapter-title">Capítulo 1: Aventuras Épicas</h3>
              </div>
              {/* Agrega más capítulos aquí */}
            </div>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {activeModal === "Información" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Información</h2>
            <p>
              Este cómic, titulado "Aventuras Épicas", es un homenaje a los momentos inolvidables que hemos compartido. Cada página refleja la amistad, las risas y las locuras que nos hacen únicos. Gracias por ser parte de estas historias y por inspirar este pequeño regalo que viene directo del corazón. ¡Por más aventuras juntos!
            </p>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}

      {activeModal === "Configuración" && (
        <div className="modal">
          <div className="modal-content">
            <h2>Configuraciones</h2>
            <p>Próximamente estarán disponibles nuevas configuraciones.</p>
            <button className="close-button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
