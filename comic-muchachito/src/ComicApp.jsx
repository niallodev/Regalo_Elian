import React, { useState } from "react";
import './css/App.css';
import Header from './components/Header';
import ComicViewer from './components/ComicViewer';
import Footer from './components/Footer';

function ComicApp() {
  const comicData = [
    { //Página 1
      panels: [
        {
          id: 1,
          image: "./img/pagina_1_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Snoopy", 
              text: "Hola, Elian. Antes de que te preguntes qué está pasando, déjame decirte algo importante: este no es un cómic cualquiera.", 
              type: "rect", 
              position: { top: "10%", left: "30%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "80%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
    { //Página 2
      panels: [
        {
          id: 1,
          image: "./img/pagina_2_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Sukuna", 
              text: "Estamos aquí porque alguien muy especial quiso enviarte un mensaje. Ese alguien es Nicolás.", 
              type: "rect", 
              position: { top: "1%", left: "71%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_2_cuadro_2.png",
          description: "",
          gridArea: "b",
          bubbles: [
            { author:"Sukuna", 
              text: "Antes de comenzar Elian, Nicolas quiere saber si te acuerdas a donde querian ir vestido asi 😏, bueno sigamos con la historia.",
              type: "rect", 
              position: { top: "15%", left: "65%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
          ],
        },
        {
          id: 3,
          image: "./img/pagina_2_cuadro_3.png",
          description: "",
          gridArea: "c",
          bubbles: [
            { author:"Snoopy", 
              text: "Nicolás nos pidió que te dijera lo importante que eres para él. Pero no solo con palabras, sino mostrándotelo con una historia.",
              type: "rect", 
              position: { top: "70%", left: "60%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",}},
          ],
        },
      ],
      layout: [
        ["a", "b"], // Primera fila
        ["c", "b"], // Segunda fila
      ],
    },
    { //Página 3
      panels: [
        {
          id: 1,
          image: "./img/pagina_3_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Asta", 
              text: "Así que, Elian, aquí va: la historia de una amistad que significa más de lo que las palabras pueden expresar.", 
              type: "rect", 
              position: { top: "0%", left: "35%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "80%", clipPath: "polygon(10% 10%, 90% 0%, 100% 100%)",}},
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
    { //Página 4
      panels: [
        {
          id: 1,
          image: "./img/pagina_4_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Killua", 
              text: "Nicolás siempre habla de cómo eres alguien en quien puede confiar.", 
              type: "rect", 
              position: { top: "-5%", left: "5%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "75%", clipPath: "polygon(0% 0%, 90% 0%, 100% 100%)",}},
            
            { author:"Gon", 
              text: "Dice que tienes esa habilidad especial de escuchar, de estar ahí cuando más se necesita.", 
              type: "rect", 
              position: { top: "-5%", left: "75%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
    { //Página 5
      panels: [
        {
          id: 1,
          image: "./img/pagina_5_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Desconocido", 
              text: "Recuerda los días cuando las cosas no iban bien y tú lo ayudaste a ver el lado positivo.", 
              type: "rect", 
              position: { top: "-5%", left: "-10%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "80%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
            
            { author:"Desconocido", 
              text: "Nicolás nunca olvidará cómo le diste ánimo cuando más lo necesitaba.", 
              type: "rect", 
              position: { top: "-5%", left: "75%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_5_cuadro_2.png",
          description: "",
          gridArea: "b",
          bubbles: [
            { author:"Asta", 
              text: "Ni tampoco la primera vez que comenzaron hablar, todo comenzo con una simple tarea, en un Sábado 20 de Agosto de 2022", 
              type: "rect", 
              position: { top: "-15%", left: "65%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
          ],
        },
        {
          id: 3,
          image: "./img/pagina_5_cuadro_3.png",
          description: "",
          gridArea: "c",
          bubbles: [
            { author:"Sukuna", 
              text: "Eso es lo que hace que esta historia sea especial.", 
              type: "rect", 
              position: { top: "-5%", left: "62%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
            
            { author:"Sukuna", 
              text: "No se trata solo de momentos grandiosos, sino de los pequeños gestos que significan el mundo para alguien.", 
              type: "rect", 
              position: { top: "40%", left: "62%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",}},
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["b", "c"], // Segunda fila
      ],
    },
    { //Página 6
      panels: [
        {
          id: 1,
          image: "./img/pagina_6_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Sasuke", 
              text: "Elian, a veces no nos damos cuenta del impacto que tenemos en la vida de los demás.", 
              type: "rect", 
              position: { top: "-15%", left: "-5%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "15%", clipPath: "polygon(0% 0%, 90% 0%, 100% 100%)",}},
            
            { author:"Naruto", 
              text: "Pero estamos seguro que para Nicolás, tú eres un ejemplo de lo que significa ser un verdadero amigo.", 
              type: "rect", 
              position: { top: "-15%", left: "75%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
          ],
        },
        {
          id: 2,
          image: "./img/pagina_6_cuadro_2.png",
          description: "",
          gridArea: "b",
          bubbles: [
            { author:"Itadori", 
              text: "Has estado con el en los momentos que el más a necesito sentir el cariño de un amigo.", 
              type: "rect", 
              position: { top: "-5%", left: "70%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "15%", clipPath: "polygon(20% 0%, 90% 0%, 0% 100%)",}},
            
          ],
        },
        {
          id: 3,
          image: "./img/pagina_6_cuadro_3.png",
          description: "",
          gridArea: "c",
          bubbles: [
            { author:"Megumi", 
              text: "En momentos en el que ha estado a punto de caer al avismo.", 
              type: "rect", 
              position: { top: "-5%", left: "-5%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "70%", clipPath: "polygon(0% 0%, 90% 0%, 0% 100%)",}},
            
            { author:"Itadori", 
              text: "Con tus locuras, chistes o pesqueños gestos que has tenido con el.", 
              type: "rect", 
              position: { top: "95%", left: "50%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "40%", clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",}},   
          ],
        },
      ],
      layout: [
        ["a", "b"], // Primera fila
        ["a", "c"], // Segunda fila
      ],
    },
    { //Página 7
      panels: [
        {
          id: 3,
          image: "./img/pagina_7_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Nobara", 
              text: "Por ejemplo un detalle que el tiene presente en todo momento y que nos conto que se aguanto las ganas de llorar de la nostalgia porque nadie habia hecho con el, ese gesto que tu hiciste para algunos puede ser una tonteria pero para el es irremplasable ese recuerto, sabes que es....", 
              type: "rect", 
              position: { top: "0%", left: "65%" }, 
              buble: {bgColor: "black", bottomOffset: "5%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",}},          
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
    { //Página 8
      panels: [
        {
          id: 1,
          image: "./img/pagina_8_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Nobara", 
              text: "No hagas trampa...", 
              type: "rect", 
              position: { top: "75%", left: "70%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}}, 
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
    { //Página 9
      panels: [
        {
          id: 1,
          image: "./img/pagina_9_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Nobara", 
              text: "Eres un tamposo...", 
              type: "rect", 
              position: { top: "90%", left: "55%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}},            
          ],
        },
        {
          id: 2,
          image: "./img/pagina_9_cuadro_2.png",
          description: "",
          gridArea: "b",
          bubbles: [
            { author:"Nobara", 
              text: "Pero bueno ya te digo cual es...", 
              type: "rect", 
              position: { top: "85%", left: "55%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}},  
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["b", "b"], // Segunda fila
      ],
    },
    { //Página 10
      panels: [
        {
          id: 1,
          image: "./img/pagina_10_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Desconocido", 
              text: "Fue cuando le diste el postre de sweet coffee.", 
              type: "rect", 
              position: { top: "75%", left: "45%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}},  
            
            { author:"Desconocido", 
              text: "Es verdad que para algunos eso puede ser insignificante pero para el signico mucho.", 
              type: "rect", 
              position: { top: "20%", left: "70%" }, 
              buble: {bgColor: "black", bottomOffset: "10%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 100%)",}},  
          ],
        },
        {
          id: 2,
          image: "./img/pagina_10_cuadro_2.png",
          description: "",
          gridArea: "b",
          bubbles: [
            { author:"Desconocido", 
              text: "Muchas de las personas que el consideraba como amigos e incluso algunos de la propia familia de el, nunca hicieron ese gesto que tu hiciste o ni siquiera se tomaban la molestia de preguntar como estas.", 
              type: "rect", 
              position: { top: "40%", left: "75%" }, 
              buble: {bgColor: "black", bottomOffset: "10%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 100%)",}},  
          ],
        },
        {
          id: 3,
          image: "./img/pagina_10_cuadro_3.png",
          description: "",
          gridArea: "c",
          bubbles: [
            { author:"Desconocido", 
              text: "Nicolás no solo valora lo que haces, sino quién eres. Alguien confiable, solidario y lleno de energía positiva.", 
              type: "rect", 
              position: { top: "70%", left: "50%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "10%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}},  
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["b", "c"], // Segunda fila
      ],
    },
    { //Página 11
      panels: [
        {
          id: 1,
          image: "./img/pagina_11_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Desconocido", 
              text: "Por eso estamos aquí, para decirte algo que tal vez no escuches lo suficiente: eres importante, Elian. Para Nicolás, y para quienes tienen la suerte de conocerte.", 
              type: "rect", 
              position: { top: "70%", left: "30%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "40%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}}, 
          ],
        },
        {
          id: 2,
          image: "./img/pagina_11_cuadro_2.png",
          description: "",
          gridArea: "b",
          bubbles: [
            { author:"Desconocido", 
              text: "La amistad es un regalo que crece con el tiempo. Nicolás me pidió que te recordara lo valiosa que es la tuya para él.", 
              type: "rect", 
              position: { top: "40%", left: "60%" }, 
              buble: {bgColor: "black", bottomOffset: "20%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 100%)",}},  
          ],
        },
        {
          id: 3,
          image: "./img/pagina_11_cuadro_3.png",
          description: "",
          gridArea: "c",
          bubbles: [
            { author:"Desconocido", 
              text: "Así que, cuando termines este cómic, solo quiero que hagas una cosa: sigue siendo tú, porque eso es lo que hace especial esta historia.", 
              type: "rect", 
              position: { top: "40%", left: "75%" }, 
              buble: {bgColor: "black", bottomOffset: "15%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 100%)",}},  
          ],
        },
      ],
      layout: [
        ["a", "b"], // Primera fila
        ["c", "b"], // Segunda fila
      ],
    },
    { //Página 12
      panels: [
        {
          id: 1,
          image: "./img/pagina_12_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Desconocido", 
              text: "Y recuerda, Elian: siempre hay alguien que valora cada momento que compartes.", 
              type: "rect", 
              position: { top: "85%", left: "50%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "40%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}}, 
          ],
        },
        {
          id: 2,
          image: "./img/pagina_12_cuadro_2.png",
          description: "",
          gridArea: "b",
          bubbles: [
            { author:"Nobara", 
              text: "Ese alguien es Nicolás.", 
              type: "rect", 
              position: { top: "80%", left: "50%" }, 
              buble: {bgColor: "black", bottomOffset: "100%", bottomTransformY:"0%", bottomTransformX:"0%", leftOffset: "25%", clipPath: "polygon(0% 0%, 10% 100%, 100% 100%)",}}, 
          ],
        },
        {
          id: 3,
          image: "./img/pagina_12_cuadro_3.png",
          description: "",
          gridArea: "c",
          bubbles: [
            { author:"Nobara", 
              text: "Porque la verdadera amistad no termina. Solo se transforma en recuerdos que llevamos con nosotros para siempre.", 
              type: "rect", 
              position: { top: "50%", left: "60%" }, 
              buble: {bgColor: "black", bottomOffset: "15%", bottomTransformY:"0%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 100%)",}},  
          ],
        },
      ],
      layout: [
        ["a", "b"], // Primera fila
        ["c", "b"], // Segunda fila
      ],
    },
    { //Página 13
      panels: [
        {
          id: 1,
          image: "./img/pagina_13_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"Asta", 
              text: "Que vivan los amigos.", 
              type: "rect", 
              position: { top: "40%", left: "10%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"20%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 50%)",}},  
            
            { author:"Desconocido", 
              text: "Que vivan los amigos.", 
              type: "rect", 
              position: { top: "85%", left: "75%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"20%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 50%)",}},  
            
            { author:"Desconocido", 
              text: "Que vivan los amigos.", 
              type: "rect", 
              position: { top: "90%", left: "15%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"20%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 50%)",}},  
            
            { author:"Desconocido", 
              text: "Que vivan los amigos.", 
              type: "rect", 
              position: { top: "40%", left: "65%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"20%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 50%)",}},  
            
            { author:"Desconocido", 
              text: "Que vivan los amigos.", 
              type: "rect", 
              position: { top: "0%", left: "15%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"100%", bottomTransformX:"0%", leftOffset: "75%", clipPath: "polygon(0% 0%, 0% 100%, 70% 0%)",}},  
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
    { //Página 14
      panels: [
        {
          id: 1,
          image: "./img/pagina_14_cuadro_1.png",
          description: "",
          gridArea: "a",
          bubbles: [
            { author:"", 
              text: "", 
              type: "", 
              position: { top: "40%", left: "10%" }, 
              buble: {bgColor: "black", bottomOffset: "0%", bottomTransformY:"20%", bottomTransformX:"-100%", leftOffset: "0%", clipPath: "polygon(0% 0%, 100% 10%, 100% 50%)",}},    
          ],
        },
      ],
      layout: [
        ["a", "a"], // Primera fila
        ["a", "a"], // Segunda fila
      ],
    },
  ];
  //! Header
  // Definir los estados y funciones
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [activeModal, setActiveModal] = useState(null);

  const totalPages = comicData.length; // Número total de páginas del cómic

  // Función para ir a la página anterior
  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // Función para ir a la página siguiente
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a una página específica
  const onGoToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Cambia la página actual
    }
  };

  const openModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  
  const comicTitle = "Aventuras Épicas" //Titulo del Comic

  //! Footer
  const navigateTo = (section) => {
    console.log(`Navegar a: ${section}`);
    // Aquí puedes implementar la navegación
  };
  return (
    <div className="App">
      <Header title={comicTitle}  currentPage={currentPage} totalPages={totalPages} onPrevious={handlePrevious} onNext={handleNext} onGoToPage={onGoToPage} activeModal={activeModal} openModal={openModal} closeModal={closeModal}/>
      <ComicViewer comicData={comicData} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Footer author="Nicolás Loor" year={2024} onNavigate={navigateTo} onGoToPage={onGoToPage} openModal={openModal}/>
    </div>
  );
}

export default ComicApp;

//! 1128