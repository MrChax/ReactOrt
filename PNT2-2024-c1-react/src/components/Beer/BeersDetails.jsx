import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


export default function BeersDetails(props) {
  const { name } = useParams();
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    // Esto se llama la primera vez que carga el componente.
    fetch(
      "http://localhost:8080/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBeer(data.find(beer => beer.name === name));

      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <img src={beer.label} />
    </>
  );
}