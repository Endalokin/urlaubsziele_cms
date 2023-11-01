import React from 'react'

export default function Card({country, imgURL, text}) {
    return (
        <>
            <div className="col">
                <div className="td_selector card h-100 shadow border-light active" data-traveldest="Frankreich" style={{ overflow: "hidden" }}>
                    <a href="#div_id" className="link-dark link-underline link-underline-opacity-0">
                        <img src={imgURL} alt="" className="card-img-top object-fit-cover" style={{ height: "30vh", minHeight: "4em" }} />
                        <div className="card-img-overlay d-md-none text-center text-bg-dark bg-opacity-50" style={{ height: "10vh", minHeight: "2em", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h2><strong>{country}</strong></h2>
                        </div>
                        <div className="card-body d-none d-md-block">
                            <h2 className="card-title">{country}</h2>
                            <p className="card-text">
                                {text}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
