/*   import './Profile.css'   */
/* import React, { useState } from 'react';   
import './casa-verde.webp'

function ProfileCard({ titulo, arroba, img, onHover, isHovered }) {
  const cardStyle = {
    display: isHovered ? 'block' : 'none',
    /* ...otros estilos si es necesario 
  };
  return (
    <div className="ProfileCard" style={cardStyle}>
      <section className="section "/* style={{ backgroundImage: `url(${img})` }} >
           <div className="card"  onMouseEnter={onHover}>
             <div className="card-img">
               <figure>
                 <img src={img} alt="Duple" className="image is 1by1" />
               </figure>
             </div>
             <div className="card-content">
               <div className="media-content"  >
                 <h5 className="title is-6">{titulo}</h5>
                 <h6 className="subtitle is-9">{arroba}</h6>
               </div>
             </div>
             <button className="button is-danger is-fullwidth">
               <p>more</p>
             </button>
           </div>
      </section>
    </div>
  );
}
export default ProfileCard;








import './Profile.css'
/* import { useState } from 'react'; */
import './casa-verde.webp'
import './Profile.css'  
/*  */
function ProfileCard({ titulo, arroba, img, onHover }) {
  return (
    <div  className="ProfileCard" >
      <section className={`section`} /* style={{ backgroundImage: `url(${img})` }} */>
        <div className="card" onMouseEnter={onHover}>
          <div className="card-img">
            <figure>
              <img src={img} alt="Duple" className="image is 1by1" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content"  >
              <h5 className="title is-6">{titulo}</h5>
              <h6 className="subtitle is-9">{arroba}</h6>
            </div>
          </div>
          <button className="button is-danger is-fullwidth">
            <p>more</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProfileCard;






















