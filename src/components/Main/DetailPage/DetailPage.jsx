

import React, { useEffect,useState } from 'react'
import FactsTable from './FactsTable'
import fetchData from '../../../utils/fetchAPI'
import DetailPageImage from './DetailPageImage';

export default function DetailPage({}) {

    const id = "11kuRvuGnGSd85UbY0i5ao";
    const {VITE_CF_TOKEN,VITE_SPACE_ID} = import.meta.env;

    function handleData(data)
    {
        console.log("handleData:", data.fields);
        setCountryData(data.fields)
    }

    const [countryData,setCountryData] = useState();

    //tmp url for single Entry

    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries/${id}?access_token=${VITE_CF_TOKEN}`

    useEffect(()=>{
        fetchData(url,handleData)
    },[]);

    const MainOutput = countryData? createDetails(countryData) : <div>NoData,loading</div>

    return (
        MainOutput
    )

    function createDetails(_data)
    {
        return(

        <div id="div_id" className="container py-4" >
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
                                        <DetailPageImage assetID={_data.flag.sys.id} classname={"img-fluid shadow border border-secondary border-opacity-25 border-2"} htmlID={"selected_dest_flagpath"} alt={"Flagge des Landes"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                       <DetailPageImage assetID={_data.image.sys.id} classname={"img-fluid object-fit-cover rounded"} htmlID={"selected_dest_imagepath"} alt="country" style={{ height: "100%" }}/>
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
    )}
}