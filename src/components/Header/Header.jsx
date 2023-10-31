import React from 'react'

export default function Header() {
    return (
        <header>
            <nav id="page_top" className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
                <div className="container mx-auto justify">
                    <a className="navbar-brand" href="#">
                        <img src="./src/assets/logo.png" alt="Logo" width="100" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Urlaubsziele">Urlaubsziele</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Über uns">Über uns</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Urlaubsziel suchen" aria-label="search" id="datatable-search-input" />
                            <button className="btn btn-outline-success" type="submit">Suchen</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className=" text-center bg-image mb-1" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')", height: "400px", backgroundSize: "cover" }} id="Über uns">
                <div className="mask h-100 w-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">URLAUBSZIELE.DE</h1>
                            <h4 className="mb-3">die schönsten Urlaubsziele ... hilfreiche Reisetipps ... Empfehlungen.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
