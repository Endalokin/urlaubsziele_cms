import { useEffect,useState } from "react";
import fetchData from "../../../utils/fetchAPI";
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


    useEffect(()=> {
        fetchData(url1,handleCountryDetails);
        fetchData(url2,handleCountryCards);

    },[])

    function handleCountryDetails(data)
    {
        console.log("CountryDetailsSearch:", data)

    }

    function handleCountryCards(data)
    {

        
    }

    return (<div>SearchResults</div>
        
        )
}