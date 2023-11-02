import React from 'react'
import SearchBar from './SearchBar'
import { HashLink } from 'react-router-hash-link'

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
                                <HashLink className="nav-link active" to="/#overview">Urlaubsziele</HashLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Über uns">Über uns</a>
                            </li>
                        </ul>
                        <SearchBar />
                    </div>
                </div>
            </nav>

        </header >
    )
}
