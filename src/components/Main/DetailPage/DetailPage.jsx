

import React, { useEffect, useState } from 'react'
import FactsTable from './FactsTable'
import fetchData from '../../../utils/fetchAPI'
import DetailPageImage from './DetailPageImage';
import { useParams } from 'react-router-dom';

export default function DetailPage({ }) {


    //https://app.contentful.com/spaces/8es1vct37z1y/assets/79MohGKY7i8ilc0OSAa288

    //const id = "11kuRvuGnGSd85UbY0i5ao";
    const { id } = useParams();
    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;


    function handleData(data) {
        console.log("handleData:", data.fields);
        setCountryData(data.fields)
    }

    function handleShareBtnURL(data)
    {
        console.log("Share:",data.fields.file.url)
        setShareBtnURL(data.fields.file.url);
    }
    function handleNavBtnURL(data)
    {
        console.log("Share:",data.fields.file.url)
        setNavBtnURL(data.fields.file.url);
    }

    const [countryData, setCountryData] = useState();
    const [shareBtnURL,setShareBtnURL] = useState();
    const [navBtnURL,setNavBtnURL] = useState();

    //tmp url for single Entry

    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries/${id}?access_token=${VITE_CF_TOKEN}`
    const shareurl = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/48CvpYGYtsrxDC9QQr2xi9?access_token=${VITE_CF_TOKEN}`
    const navurl = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/79MohGKY7i8ilc0OSAa288?access_token=${VITE_CF_TOKEN}`

    useEffect(() => {
        fetchData(url, handleData);
        fetchData(shareurl,handleShareBtnURL);
        fetchData(navurl,handleNavBtnURL);
    }, []);

    const MainOutput = countryData ? createDetails(countryData) : <div>NoData,loading</div>

    return (
        MainOutput
    )

    function createDetails(_data) {
        return (

            <div id="div_id" className="container py-4" >
                <button>Back</button>
                <div className="row bg-light bg-opacity-75 rounded">
                    <div className="col">
                        <div className="row">
                            <div id="selected_dest_name" className="col h3">
                                {_data.name}
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
                                            <div id="selected_dest_tagline" className="col h6">{_data.tagline}

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <br />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div id="selected_dest_description" className="col">
                                                {_data.description}
                                            </div>
                                        </div>
                                        <div className="row py-3 ">
                                            <div className="col-lg-8 col-xl-6 col-10">
                                                <FactsTable languages={_data.languages} residents={_data.residents} area={_data.area} />
                                            </div>
                                            <div className="col-lg-1 col-xl-3 d-none d-lg-block">
                                            </div>
                                            <div className="col-lg-3 col-xl-3 col-2">
                                                <DetailPageImage assetID={_data.flag.sys.id} classname={"img-fluid shadow border border-secondary border-opacity-25 border-2"} htmlID={"selected_dest_flagpath"} alt={"Flagge des Landes"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                                <DetailPageImage assetID={_data.image.sys.id} classname={"img-fluid object-fit-cover rounded"} htmlID={"selected_dest_imagepath"} alt="country" style={{ height: "100%" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2" style={{ height: "32px", width: "100px" }}>
                                <div className="row">
                                    <div className=" col">
                                        <a href="#page_top"  >
                                            <img src={navBtnURL} className="topimg" />
                                        </a>
                                    </div>
                                    <div className="sharecountry col">
                                        <img src={shareBtnURL} className="shareimg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}