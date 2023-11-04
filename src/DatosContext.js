import React, { createContext, useState } from "react";

export const DataContext = createContext();


console.log(DataContext)

     const datosHijos = {     
         nombre:"PEpe",
         apellido:"Rojas",
         edad:25
      }
      const datosNietos = {
      
        nombre:"Marta",
        apellido:"Lopez",
        edad:40
      }
     
export const DataProvider = ({children})=>{
  const [contador , setContador ] = useState(0);


    return (
       <DataContext.Provider value = {{datosHijos,datosNietos,contador,setContador}}>
            {children}
       </DataContext.Provider>
      
      

    )


}