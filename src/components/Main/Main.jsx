import React from 'react'
import Card from './Cards/Card'
import FactsTable from './DetailPage/FactsTable'
import Cards from './Cards/Cards'

export default function Main() {
    return (
        <main>
            <Cards />
            <div id="div_id" className="container py-4" >
                <div className="row bg-light bg-opacity-75 rounded">
                    <div className="col">
                        <div className="row">
                            <div id="selected_dest_name" className="col h3">
                                Schweden
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <br />
                            </div>
                        </div>
                        <div className="row">
                            <div id="contentrow" className="col-12 col-md-6">
                                <div className="row h-100">
                                    <div className="col" >
                                        <div className="row">
                                            <div id="selected_dest_tagline" className="col h6">Spiel aus Insel und Seen

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <br />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div id="selected_dest_description" className="col">Schweden ist ein skandinavisches Land mit Tausenden der Küste vorgelagerten Inseln und Seen im Landesinnern sowie großen Nadelwäldern und Gletscherbergen. Die größten Städte, wie die Hauptstadt Stockholm im Osten und Göteborg und Malmö im Südwesten, liegen alle an der Küste. Stockholm wurde auf 14 Inseln errichtet, hat mehr als 50 Brücken und besitzt die mittelalterliche Altstadt Gamla Stan, Königspaläste und Museen wie das Freiluftmuseum Skansen.

                                            </div>
                                        </div>
                                        <div className="row py-3 ">
                                            <div className="col-lg-8 col-xl-6 col-10">
                                                <FactsTable />
                                            </div>
                                            <div className="col-lg-1 col-xl-3 d-none d-lg-block">
                                            </div>
                                            <div className="col-lg-3 col-xl-3 col-2">
                                                <img src="images/svg/bgr.svg" className="img-fluid shadow border border-secondary border-opacity-25 border-2" id="selected_dest_flagpath" alt="Flagge des Landes" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                                <img id="selected_dest_imagepath" src="images/schweden_800px.jpg" alt="country" className="img-fluid object-fit-cover rounded" style={{ height: "100%" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2" style={{ height: "32px", width: "100px" }}>
                                <div className="row">
                                    <div className=" col">
                                        <a href="#page_top"  >
                                            <img src="./src/assets/to-top-b.svg" className="topimg" />
                                        </a>
                                    </div>
                                    <div className="sharecountry col">
                                        <img src="./src/assets/share.svg" className="shareimg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
