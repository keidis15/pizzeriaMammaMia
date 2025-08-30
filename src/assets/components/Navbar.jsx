import FormatoNumero from "../../utils/FormatoNumero";


export default function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mía
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn" type="submit">
                <a className="nav-link" href="#">
                  Home
                </a>
              </button>
            </li>
            <ul className="d-flex">
              {token ? (
                <>
                  <li>
                    <button className="btn ">
                      <a className="nav-link" href="#">
                        Profile 👤
                      </a>
                    </button>
                  </li>
                  <li>
                    <button className="btn ">
                      <a className="nav-link" href="#">
                        Logout 🚪
                      </a>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button className="btn">
                      <a className="nav-link" href="#">
                        Login 🔑
                      </a>
                    </button>
                  </li>
                  <li>
                    <button className="btn ">
                      <a className="nav-link" href="#">
                        Register 📝
                      </a>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </ul>

          <button className="btn btn-outline-success" type="submit">
            Total: {FormatoNumero(total)}$
          </button>
        </div>
      </div>
    </nav>
  );
}
