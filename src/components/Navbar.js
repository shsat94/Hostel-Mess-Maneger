import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#B4C3A7' }}>
                <div className="container-fluid">
                    
                    <Link className="navbar-brand" to="/home"><button className="btn"><span className="material-symbols-outlined">
                        home
                    </span></button></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Mess</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {/* */}
                            <Link to="/studentprofile"> <button className="btn">
                                <span className="material-symbols-outlined">person
                            </span></button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
