// import "../User/User.css";
import "./Beer.css"
import Beer from "./Beer.jsx";

export default function BeerList(props) {
  return (
    <ul className="beers-list">
      {props.Beers.map((beer, index) => {
        return (
          <Beer
            key={index}
            BeerName={beer["name"]}
            Picture={beer.label}
            abv={beer.abv}
            type={beer.type}
          />
        );
      })}
    </ul>
  );
}