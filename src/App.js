/* import React, { useState } from 'react'; */
import 'bulma/css/bulma.css';
import Hero from "./Hero";
import ProfileCard from './ProfileCard';
/* import './App.css'; */
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

  // Función para cambiar el fondo overlay al pasar el mouse sobre un ProfileCard
  function handleOverlayChange(newBackgroundImage) {
    setBackgroundImage(newBackgroundImage);
  }

  // Función para manejar el mouseLeave y volver al fondo predeterminado
  function handleMouseLeave() {
    if (hoveredCard !== null) {
      setBackgroundImage(Fondo);
      setHoveredCard(null);
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

      <section className='section is-small' onMouseLeave={handleMouseLeave}>

        <div className="ProfileCardContainer">
          <section className='columns'>
            <div className='column is-4'>
              <ProfileCard
                titulo="Duplex"
                arroba="elchavo@hotmail.com"
                img={DupleImg}
                onHover={() => {
                  handleOverlayChange(DupleImg);
                  setHoveredCard("Duplex");
                }}
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                titulo="Triplex"
                arroba="elchavo@hotmail.com"
                img={TriplexImg}
                onHover={() => {
                  handleOverlayChange(TriplexImg);
                  setHoveredCard("Triplex");
                }}
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                titulo="Single"
                arroba="donrramon@hotmail.com"
                img={SingleImg}
                onHover={() => {
                  handleOverlayChange(SingleImg);
                  setHoveredCard("Single");
                }}
              />
            </div>
          </section>
        </div>
      </section>

    </div>
  )
}

export default App;
