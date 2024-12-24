// import React, { useEffect, useState } from "react";
import TextBubble from "./TextBubble";
import "../css/Panel.css";

function Panel({ panelData, isActive, onFocus }) {
  // return (
  //   <div className="comic-panel">
  //     <img
  //       src={panelData.image}
  //       alt={panelData.description || "Panel del cómic"}
  //       className="panel-image"
  //     />
  //     {panelData.bubbles.map((bubble, index) => (
  //       <TextBubble key={index} bubbleData={bubble} />
  //     ))}
  //   </div>
  // );

  const { image, description, bubbles, gridArea } = panelData;
  console.log(image, description, bubbles, gridArea);
  console.log("-----aa");
  console.log(description);

  return (
    <div className={`comic-panel ${isActive ? "active": ""}`} style={{ gridArea }}
    // <div className={`comic-panel ${isActive ? "active": ""}`} style={{ gridArea }}
    onMouseEnter={onFocus} // Activa el foco cuando el mouse entra
    >
      <img
        src={image}
        alt={description || "Panel del cómic"}
        className="panel-image"
      />
      {bubbles.map((bubble, index) => (
        <TextBubble key={index} bubbleData={bubble} />
      ))}
    </div>
  );
}

export default Panel;
