import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        {/* ei jaigai o col-10 diye size define kore dite partam  */}
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                  Joy's WebSites
                </NavLink>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav gap-0 gap-lg-3 ms-auto mb-3 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        // activeClassName='menu_active'
                        // exact 
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        // activeClassName='menu_active'
                        className="nav-link"
                        to="/about"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        // activeClassName='menu_active'
                        className="nav-link"
                        to="/contact"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        // activeClassName='menu_active'
                        className="nav-link"
                        to="/services"
                      >
                        Our Services
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
