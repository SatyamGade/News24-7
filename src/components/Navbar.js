import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ModeContext from '../context/mode/ModeContext'


function Navbar() {

    let location = useLocation();
    useEffect(() => {
        // eslint-disable-next-line
    }, [location]);


    // eslint-disable-next-line
    const a = useContext(ModeContext);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${a.mode === "light" ? "light" : "dark"} bg-${a.mode === "light" ? "light" : "dark"}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">News 24/7</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                        </li>
                        <button type="button" onClick={a.toggleMode} className={`btn btn-sm my-1 ${a.mode === "dark" ? "btn-light": "btn-dark"}`}>{a.mode === "dark" ? "Enable Light Mode": "Enable Dark Mode" }</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
