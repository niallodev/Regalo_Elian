import React, { useState, useEffect } from "react";
import Panel from "./Panel";
import "../css/ComicPage.css";

function ComicPage({ pageData, currentPage }) {
  console.log("matriz",pageData);
  console.log(currentPage);
  // const layout = [
  //   ["a", "b"], // Primera fila
  //   ["c", "c"], // Segunda fila
  // ];
  // Para la deteccion del panel activo 
  const [activePanel, setActivePanel] = useState(null);

  // Resetea el panel activo cuando se cambia de página
  useEffect(() => {
    setActivePanel(null);  // Reinicia el estado de activePanel al cambiar de página
  }, [currentPage]); // Depende del índice de la página

  const handlePanelFocus = (index) => {
  
    setActivePanel(index);
  };

  // para la creacion del grid
  const gridTemplateAreas = pageData.layout.map(row => `"${row.join(" ")}"`).join(" ");

  // const columns = `repeat(${layout[0].length}, 1fr)`; // Número de columnas dinámico
  // const rows = `repeat(${layout.length}, auto)`; // Número de filas dinámico
  // Configura las columnas de acuerdo al contenido. Usamos auto para que las columnas se ajusten al contenido.
  const columns = `repeat(${pageData.layout[0].length}, auto)`; // Número de columnas dinámico, ajustado al contenido.
  
  // Configura las filas dinámicamente con auto, ajustándose a la altura del contenido.
  const rows = `repeat(${pageData.layout.length}, auto)`; 

  // Mapear las áreas desde el layout a los paneles
  const panelGridAreas = pageData.layout.flat(); // ["a", "b", "c", "c"]
  // console.log(panelGridAreas);

  

  return (
    // <div className="comic-page">
    //   {pageData.panels.map((panel, index) => (
    //     <Panel key={index} panelData={panel} />
    //   ))}
    // </div>
    <div className="comic-page">
      <div className="comic-grid"
      style={{
        gridTemplateAreas: gridTemplateAreas, // Distribución dinámica
        gridTemplateColumns: columns, // Columnas dinámicas
        gridTemplateRows: rows, // Filas dinámicas
      }}
      >
        {/* {pageData.panels.map((panel, index) => (
          <Panel key={index} panelData={panel} />
        ))} */}
        {pageData.panels.slice(0, 3).map((panel, index) => (
          <Panel key={index} panelData={panel} 
          isActive={activePanel === index} // Detecta el panel activo
          onFocus={() => handlePanelFocus(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ComicPage;
