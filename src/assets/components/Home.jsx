import Header from "../components/Header";
import CardPizza from "./CardPizza";

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
            img="/imgs/pizzaNapolitana.jpg"
            alt="Pizza Napolitana"
          />
          <CardPizza
            name="Pizza Española"
            price={9990}
            ingredientes={["Mozzarella, ","Gorgozola, ", "Provolone"]}
            img="/imgs/pizzaEspanola.jpg"
            alt="Pizza Espanola"
          />
          <CardPizza
            name="Pizza Pepperoni"
            price={8990}
            ingredientes={["Mozzarella, ","Pepperoni, ","Oregano"]}
            img="/imgs/pizza-pepperoni.jpg"
            alt="Pizza Pepperoni"
          />
        </div>
      </div>
    </>
  );
}
