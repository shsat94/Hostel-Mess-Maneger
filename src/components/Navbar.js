import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#B4C3A7' }}>
                <div className="container-fluid">
                    
                    <button className="btn"><a className="navbar-brand" href="/"><span className="material-symbols-outlined">
                        home
                    </span></a></button>
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
                            <button className="btn"><span className="material-symbols-outlined">person
                            </span></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
