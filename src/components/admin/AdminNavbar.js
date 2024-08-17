import React from 'react'
import { Link } from 'react-router-dom'


export default function AdminNavbar() {
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
                                <Link className="nav-link active" aria-current="page" to="/notice">Notice</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
            
                        </div>
                    </div>
                </div>
            </nav>
        </>
  )
}
