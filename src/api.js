import axios from "axios";

const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID Cg8LE7fJaJLHCE7PCppj7ooE8i3ftZ811a9eM_OTcKE"
      },
      params: {
        query: term
      }
    });
    return response.data.results || []; // Devolver un array vacío si no hay resultados
  } catch (error) {
    console.error("Error al buscar imágenes:", error);
    return []; // Devolver un array vacío en caso de error
  }
};
export default searchImages;











/* Cg8LE7fJaJLHCE7PCppj7ooE8i3ftZ811a9eM_OTcKE */