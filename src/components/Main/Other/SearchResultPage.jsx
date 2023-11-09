import { useEffect,useState } from "react";
import fetchData, { fetchDataMulti } from "../../../utils/fetchAPI";
import { useParams } from "react-router-dom";

export default function SearchResultPage()
{

    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;

    const { searchTerm } = useParams();
    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&query=${searchTerm}`

    const url1 = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryDetails&query=${searchTerm}`
    const url2 = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&query=${searchTerm}`
    //
    //countryDetails

    const dataReady = new Promise(function(resolve,reject){

            setTimeout(()=> {reject(new Error("Da ist was schiefgelaufen."))},10000)
  
            resolve("ready")
    });

    fetchDataMulti([url1,url2],handleSearchResults)

    useEffect(()=> {

        //fetchData(url1,handleCountryDetails);
        //fetchData(url2,handleCountryCards);
        //Start Async to Wait for Results

    },[])

    function handleSearchResults(data)
    {
        console.log("CountryDetails+CardsSearch:", data)
        //Todo Hole Werte

    }

    return (<div>SearchResults</div>
        
        )
}