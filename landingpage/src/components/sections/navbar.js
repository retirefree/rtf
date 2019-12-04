import React from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends React.Component {
    render() {
      return (
        <nav 
            className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" 
            id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">RetireFree</a>
                <button 
                    className="navbar-toggler"
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#ftco-nav" 
                    aria-controls="ftco-nav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <NavLink exact to="/" className="nav-item" activeClassName="active">
                            <span className="nav-link">Home</span>
                        </NavLink>
                        <NavLink to="/quotes" className="nav-item" activeClassName="active">
                            <span className="nav-link">Quotes</span>
                        </NavLink>
                        {/* <NavLink to="/school" className="nav-item" activeClassName="active">
                            <span className="nav-link">School</span>
                        </NavLink> */}
                        <NavLink to="/contact" className="nav-item" activeClassName="active">
                            <span className="nav-link">Contact</span>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
      )
    }
}

export default NavBar;
