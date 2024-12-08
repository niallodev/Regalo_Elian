import React, { useState } from "react";
import ComicPage from "./ComicPage";
import "../css/ComicViewer.css";



function ComicViewer({ comicData, currentPage, setCurrentPage }) {
  console.log("comicview",comicData);
  console.log(currentPage);
  // console.log(setCurrentPage);

  const handleNextPage = () => {
    if (currentPage < comicData.length) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
      console.log(setCurrentPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
      console.log(setCurrentPage);
    }
  };
  // console.log("Prueba_0",currentPage );
  // console.log("Prueba_1",currentPage - 1);
  // console.log("Prueba_2",comicData);
  // console.log("Prueba_3",comicData[currentPage - 1]);

  return (
    <div className="comic-viewer">
      <ComicPage pageData={comicData[currentPage - 1]}  currentPage={currentPage}/>
      <div className="comic-navigation">
        <button onClick={handlePreviousPage} disabled={currentPage - 1 === 0}>
          ◀ Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage - 1 === comicData.length - 1}
        >
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}

export default ComicViewer;
