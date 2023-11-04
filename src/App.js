
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.css';
import Hero from "./Hero";
/* import ProfileCard from './ProfileCard';  */
import ProfileCardContainer from './ProfileCardContainer';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer'; */
/* import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; */
/* import './App.css'; */
import SearchBar from "./searchBar";
import ImageList from "./ImageList";
import searchImages from "./api";
import { useState } from "react";


 /* import HijosUno from "./HijosUno"  */
 /* import HijosDos from "./HijosDos"  */
 /* import { DataProvider } from "./DatosContext";  */

 import Frente from './img/new.jpg'; 
 import Fondo from './casa-verde.webp'; 
 import Moderna from './img/casa3.jpg';
/*  import Acordeon from "./Acordeon"; */
/*  import ThreeScene from "./Logo"  */

import NavBar from './components/NavBar/NavBar';

import { useEffect } from "react";
/* import {db} from  "./config/Firebase" */
/* import {collection, getDocs} from "firebase/firestore" */
/*  */


function App() {
   
   const [backgroundImage, setBackgroundImage] = useState(Fondo); 
   const [hoveredCard, setHoveredCard] = useState(null); 

   const imagenesCarrusel = [
    Fondo,
    Frente,
    Moderna
    
    
  ];
  
   

  /* // Función para cambiar el fondo overlay al pasar el mouse sobre un ProfileCard */
  function handleOverlayChange(newBackgroundImage) { 
    setBackgroundImage(newBackgroundImage); 
   } 
   const [indiceActual, setIndiceActual] = useState(0);
   useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((indiceAnterior) => (indiceAnterior + 1) % imagenesCarrusel.length);
    }, 2000);
  
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);

  const estiloImagenDeFondo = {
    backgroundImage: `url(${imagenesCarrusel[indiceActual]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Establece una altura mínima para cubrir toda la ventana
  };
  
  

  /* // Función para manejar el mouseLeave y volver al fondo predeterminado */
   function handleMouseLeave() { 
     if (hoveredCard !== null) { 
       setBackgroundImage(indiceActual); 
       setHoveredCard(null); 
     } 
   } 
  const [img , setImg ] = useState([]);
  const handleSubmit = async (term)=>{
    let resultado = await searchImages(term);
    setImg(resultado)
  }         
/*    const [itemList , setItemList ] = useState([]); */
/*    const [newItemNombre , setNewItemNombre ] = useState("") ; */
  /*  const [newItemNombre , setNewItemNombre ] = useState("") ; */
  /*  const [newItemNombre , setNewItemNombre ] = useState("") ; */



  /*  const itemsCollectionRef = collection(db,"Items"); */
 
 
  /*  useEffect(() =>{ */

  /*   const getItemList = async () => { */
  /*     const data = await getDocs(itemsCollectionRef) */
  /*     // console.log(data.docs) */
  /*     const filteredData = data.docs.map( (doc)=>({ */
  /*       ...doc.data(), */
  /*       id:doc.id */
  /*     }) ) */
  /*      */
  /*     setItemList(filteredData) */

  /*   } */

  /*   getItemList() */

  /* },[] ) */
 
  return (
    <div className="App" style={estiloImagenDeFondo} /* style={{ backgroundImage: `url(${backgroundImage})` }}  */ >
      <BrowserRouter>
      
           <Hero/>
              <section className="homeContainer">
                  <div>
                    <SearchBar enSubmit={handleSubmit} />
                    <ImageList images={img} />
                  </div>
                  <ProfileCardContainer  />     
              </section>                    
           <Routes>
           <Route path="/nav" element={<NavBar/>}/>
            {/*  <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>}/> */}
            {/*  <Route path="/category/:categoryId" element={<ItemListContainer />}/> */}
            {/*  <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/> */}
             <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
           </Routes>     
      </BrowserRouter>     
                         

    </div>
  )
}

export default App;

 
 
 

 
 

