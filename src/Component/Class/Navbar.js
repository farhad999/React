import React from 'react'
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink exact={true} className="navbar-brand" to="/">MyReact</NavLink>
                <div className="navbar-expand">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName="active" className="nav-link"
                                     to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName={"active"} className="nav-link"
                                     to="/photos">Photos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact={true} activeClassName={"active"} className="nav-link"
                                     to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact={true} activeClassName={"active"} className="nav-link"
                                     to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>


        )
    }

}

export default Navbar