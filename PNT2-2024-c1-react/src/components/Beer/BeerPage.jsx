
import { useEffect, useState } from "react";
import BeerList from "./BeerList";

export default function BeerPage(props) {
    const [beers, setBeers] = useState([]);
  
    useEffect(() => {
      // Esto se llama la primera vez que carga el componente.
      fetch(
        "http://localhost:8080/"
      )
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setBeers(data);
        })
        .catch((error) => console.log(error));
    }, []);
    return (
      <div>
        <BeerList Beers={beers} />
      </div>
    );
  }