import Header from "../components/Header";
import CardPizza from "./CardPizza";
import napolitana from '../assets/imgs/pizzaNapolitana.jpg';
import espanola from '../assets/imgs/pizzaEspanola.jpg';
import pepperoni from '../assets/imgs/pizza-pepperoni.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row ">
          <CardPizza
            name="Pizza Napolitana"
            price={7990}
            ingredientes={["Mozzarella, ","Jamon, ","Oregano, ","Tomates"]}
            img={napolitana}
            alt="Pizza Napolitana"
          />
          <CardPizza
            name="Pizza Española"
            price={9990}
            ingredientes={["Mozzarella, ","Gorgozola, ", "Provolone"]}
            img={espanola}
            alt="Pizza Espanola"
          />
          <CardPizza
            name="Pizza Pepperoni"
            price={8990}
            ingredientes={["Mozzarella, ","Pepperoni, ","Oregano"]}
            img={pepperoni}
            alt="Pizza Pepperoni"
          />
        </div>
      </div>
    </>
  );
}
