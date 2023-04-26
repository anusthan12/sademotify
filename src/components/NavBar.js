import React from "react";
import "./css/NavBar.css";
import metadata from "../data/metadata.json";

const NavBar = () => {
    return(
        <div className="navbar">
            <i className="fab fa-spotify"></i>
            <div className="app-header">{metadata.appName}</div>
            <div className="nav-links">
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >
                    <a href="https://github.com/anusthan12"><i class="fab fa-github"></i></a>
                    {/* <i className="fab fa-github" >  </i> */}
                </a>
            </div>
        </div>
    );
};

export default NavBar;