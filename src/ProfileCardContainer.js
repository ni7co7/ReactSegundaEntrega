import "./ProfileCardContainer.css";
import "./Profile.css";
import ProfileCard from "./ProfileCard";
import { useState } from "react";

import DupleImg from './img/bajocosto1.png';
import TriplexImg from './img/barrio.jpg';
import SingleImg from './img/casa3.jpg';
 import Fondo from './casa-verde.webp'; 


const ProfileCardContainer = () => {
           const [backgroundImage, setBackgroundImage] = useState();
           const [hoveredCard, setHoveredCard] = useState(null);
       // Función para cambiar el fondo overlay al pasar el mouse sobre un ProfileCard
           function handleOverlayChange(newBackgroundImage) {
         setBackgroundImage(newBackgroundImage);
       }
       // Función para manejar el mouseLeave y volver al fondo predeterminado
       function handleMouseLeave() {
         if (hoveredCard !== null) {
           setBackgroundImage();
           setHoveredCard(null);
         }
       }

    return (

        <div className="ProfileCardContainer"  style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            <div onMouseEnter={handleOverlayChange}  >
                <section  onMouseLeave={handleMouseLeave}  className='columns' >
                  
                   <div  className='column is-4' >
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
                   <div  className='column is-4' >
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
                   <div  className='column is-4' >
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
            
        </div>
     
       


    )



}

export default ProfileCardContainer;


































