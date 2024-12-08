import React from "react";
import "../css/TextBubble.css";

function TextBubble({ bubbleData }) {
  // const { text, position } = bubbleData;
  

  
    /* border: 2px solid black; */
    // clip-path: polygon(
    //   0% 0%, /* Punto superior izquierda */
    //   90% 0%, /* Punto superior derecho */
    //   100% 100% /* Punto inferior derecho */
    // );
    // bottom: -35px;
    // left: 120px;
  // }

  // console.log(bubbleData);

  const nombreColor = [["Nicolás", "green"],["Elian", "blue"],["Snoopy", "orange"]]
  // Buscar el color correspondiente al autor
  const authorColor = nombreColor.find(
    (item) => item[0] === bubbleData.author
  )?.[1] || "black"; // Por defecto, negro si no se encuentra el autor
  // bubleRect: {bgColor: "black", bottomOffset: "-35px", leftOffset: "120px", clipPath: "polygon(0% 0%, 90% 0%, 100% 100%)",}},
  // Esto lo usa el rect
  let bubbleStyle
  console.log("object");
  console.log(bubbleData.buble.bottomTransformY);
  console.log(bubbleData.buble);
  if(bubbleData.type === "rect"){ //Conversacion
    bubbleStyle = {
      "--bubble-bg-color": bubbleData.buble.bgColor,
      "--bubble-bottom-offset": bubbleData.buble.bottomOffset,
      "--bubble-bottom-transformY": bubbleData.buble.bottomTransformY,
      "--bubble-bottom-transformX": bubbleData.buble.bottomTransformX,
      "--bubble-left-offset": bubbleData.buble.leftOffset,
      "--clip-path": bubbleData.buble.clipPath,
      "--bubble-giro": bubbleData.buble.giro,
      top: bubbleData.position.top, // Agregar posición como parte del estilo
      left: bubbleData.position.left,
    };
  }else if(bubbleData.type === "thought"){ //Pensamiento
    bubbleStyle = {
      "--bubble-bottom-offset-after": bubbleData.buble.bottomOffsetAfter,
      "--bubble-left-offset-after": bubbleData.buble.leftOffsetAfter,
      "--bubble-bottom-offset-before": bubbleData.buble.bottomOffsetBefore,
      "--bubble-left-offset-before": bubbleData.buble.leftOffsetBefore,
      top: bubbleData.position.top, // Agregar posición como parte del estilo
      left: bubbleData.position.left,
    }
  }

  return (
    <>
      {bubbleData.text && ( // Si hay texto en bubbleData.text, renderiza el div
        <div 
          className={`bubble ${bubbleData.type}`} // Clase dinámica según el tipo
          style={bubbleStyle} // Estilos personalizados
        >
          <span style={{ color: authorColor, fontWeight: "bold" }}>{bubbleData.author}: </span>
          <span>{bubbleData.text}</span> {/* Solo muestra el texto si está presente */}
        </div>
      )}
    </>
  );
}

export default TextBubble;
