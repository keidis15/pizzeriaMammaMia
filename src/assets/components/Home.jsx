import Header from "../components/Header";
import CardPizza from "./CardPizza";
import napolitana from "../imgs/pizzaNapolitana.jpg";
import espanola from "../imgs/pizzaEspanola.jpg";
import pepperoni from "../imgs/pizza-peperoni.jpg";

export default function Home() {
  return (
    <>
      <Header />
       <img src="/imgs/pizzaNapolitana.jpg" alt="Test" />
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
