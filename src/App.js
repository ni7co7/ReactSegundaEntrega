/* import React, { useState } from 'react'; 
import 'bulma/css/bulma.css';
import Hero from "./Hero";
import ProfileCard from './ProfileCard';
/* import './App.css'; 
import SearchBar from "./searchBar";
import ImageList from "./ImageList";
import searchImages from "./api";
import { useState } from "react";



import DupleImg from './img/bajocosto1.png';
import TriplexImg from './img/barrio.jpg';
import SingleImg from './img/casa3.jpg';
import Fondo from './casa-verde.webp';



function App() {
  const [backgroundImage, setBackgroundImage] = useState(Fondo);
  const [hoveredCard, setHoveredCard] = useState(null);
  /* const [selectedCard, setSelectedCard] = useState(null); 

  // Función para cambiar el fondo overlay al pasar el mouse sobre un ProfileCard
  function handleOverlayChange(newBackgroundImage) {
    setBackgroundImage(newBackgroundImage);
  }

  // Función para manejar el mouseLeave y volver al fondo predeterminado
  function handleMouseLeave() {
    if (hoveredCard !== null) {
      setBackgroundImage(Fondo);
      setHoveredCard(null);
      /* setSelectedCard(null) 
    }
  }
  const [img , setImg ] = useState([]);
  const handleSubmit = async (term)=>{
    let resultado = await searchImages(term);
    setImg(resultado)
  }
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }} >
      <Hero/>
   

      <section>
          <div>
            <SearchBar enSubmit={handleSubmit} />
            <ImageList images={img} />
          </div>
      </section>

       <section >
        <div className="ProfileCardContainer" onMouseLeave={handleMouseLeave}>
          <section className="columns">
            {["Duplex", "Triplex", "Single"].map((cardType) => (
              <div className="column is-4" key={cardType}>
                <ProfileCard
                  titulo={cardType}
                  arroba="elchavo@hotmail.com" /* Puedes cambiar esto según sea necesario 
                  img={cardType === "Duplex" ? DupleImg : cardType === "Triplex" ? TriplexImg : SingleImg}
                  onHover={() => {
                    handleOverlayChange(cardType === "Duplex" ? DupleImg : cardType === "Triplex" ? TriplexImg : SingleImg);
                    setHoveredCard(cardType);
                  }}
                  isHovered={cardType === hoveredCard}
                />
              </div>
            ))}
          </section>
        </div>
      </section>

     
    </div>
  )
}

export default App;

/* import React, { useState } from 'react'; */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.css';
import Hero from "./Hero";
/* import ProfileCard from './ProfileCard'; */
import ProfileCardContainer from './ProfileCardContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import './App.css'; */
import SearchBar from "./searchBar";
import ImageList from "./ImageList";
import searchImages from "./api";
import { useState } from "react";



/* import DupleImg from './img/bajocosto1.png'; */
/* import TriplexImg from './img/barrio.jpg'; */
/* import SingleImg from './img/casa3.jpg'; */
/* import Fondo from './casa-verde.webp'; */

/* import NavBar from './NavBar'; */



function App() {
  /* const [backgroundImage, setBackgroundImage] = useState(Fondo); */
  /* const [hoveredCard, setHoveredCard] = useState(null); */

  /* // Función para cambiar el fondo overlay al pasar el mouse sobre un ProfileCard */
  /* function handleOverlayChange(newBackgroundImage) { */
  /*   setBackgroundImage(newBackgroundImage); */
  /* } */

  /* // Función para manejar el mouseLeave y volver al fondo predeterminado */
  /* function handleMouseLeave() { */
  /*   if (hoveredCard !== null) { */
  /*     setBackgroundImage(Fondo); */
  /*     setHoveredCard(null); */
  /*   } */
  /* } */
  const [img , setImg ] = useState([]);
  const handleSubmit = async (term)=>{
    let resultado = await searchImages(term);
    setImg(resultado)
  }
  return (
    <div className="App" /* style={{ backgroundImage: `url(${backgroundImage})` }} */ >
      <BrowserRouter>
           <Hero/>
           <ProfileCardContainer />
           
           <Routes>
             <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
             <Route path="/category/:categoryId" element={<ItemListContainer />}/>
             <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
             <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
           </Routes>     
          
           <section>
                <div>
                  <SearchBar enSubmit={handleSubmit} />
                  <ImageList images={img} />
                </div>
           </section> 
      </BrowserRouter>     
           
                 
                                          {/*  <section> */}
                                          {/*      <div> */}
                                          {/*         <ItemListContainer texto='Nicolas'/> */}
                                          {/*         */}
                                          {/*      </div> */}
                                          {/*  </section> */}
                                     
                                          {/*  <section className='section is-small'> */}
                                     
                                          {/*    <div className="ProfileCardContainer"  onMouseLeave={handleMouseLeave}> */}
                                          {/*      */}
                                          {/*      */}
                                          {/*           */}
                                          {/*      */}
                                          {/*      */}
                                          {/*      */}
                                          {/*    </div> */}
                                          {/*  </section> */}

    </div>
  )
}

export default App;