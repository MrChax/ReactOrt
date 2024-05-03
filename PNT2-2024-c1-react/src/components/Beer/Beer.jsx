import { Link } from "react-router-dom";
export default function Beer(props) {

  // const comprar = () => {
  //   <Link to={`/beers/${props.BeerName}`}>asdasd</Link>
  // }


  // retorno el JSX
  return (
    <li className="beer-item">
      <div className="card beer-item__content">
        <Link to={`/beers/${props.BeerName}`}>
          <div className="beer-item__image avatar">
            <img src={props.Picture} alt={props.BeerName} />
          </div>
          <div className="user-item__info">
            <p>Nombre: {props.BeerName}</p>
            <p>GradAlcolico: {props.abv}</p>
            <p>Tipo: {props.type}</p>
          </div>
        </Link>
      </div>
    </li>
  );
}