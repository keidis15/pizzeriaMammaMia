import FormatoNumero from "../../utils/FormatoNumero";

export default function CardPizza({ name, price, ingredientes, img, alt }) {
  return (
    <div className="p-5 col-lg-4 containerCard">
      <div className="card shadow-sm h-100">
        <img src={img} alt={alt} className="card-img-top cardImg" />
        <h5 className="cardTitle  text-success p-2">{name}</h5>
        <div className="cardBody justify-content-center align-items-center text-center border-top  p-1">
          <p className=" fw-bold">Ingredientes</p>
          <p className=" fw-ligth">{ingredientes}</p>
          <p className=" fw-bold">Precio: ${FormatoNumero(price)}</p>
        </div>
        <div className=" p-2 text-center fw-ligth d-flex justify-content-between border-top">
          <button className="btn btn-outline-success">Ver mas</button>
          <button className="btn btn-dark">🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
}
