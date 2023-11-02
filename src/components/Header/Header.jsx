import React from 'react'
import SearchBar from './SearchBar'
import { useState,useEffect } from 'react'
import fetchData from '../../utils/fetchAPI';

export default function Header() {

    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;

    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/2Hqzvhz0dtS6jzvpvizZGu?access_token=${VITE_CF_TOKEN}`

    const [logoURL,setLogoURL] = useState();

    useEffect(()=> {

        fetchData(url,handleLogoURL)



    },[]);

    function handleLogoURL(data)
    {
        console.log("Logo:",data.fields.file.url)
        setLogoURL(data.fields.file.url);
    }



    return (
        <header>
            <nav id="page_top" className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
                <div className="container mx-auto justify">
                    <a className="navbar-brand" href="#">
                        <img src={logoURL} alt="Logo" width="100" />
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
                        <SearchBar />
                    </div>
                </div>
            </nav>

        </header >
    )
}
