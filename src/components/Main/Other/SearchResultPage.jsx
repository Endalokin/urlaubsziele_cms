import { useEffect,useState } from "react";
import fetchData, { fetchDataMulti } from "../../../utils/fetchAPI";
import { useParams } from "react-router-dom";
import Head from '../../../utils/Head';

export default function SearchResultPage()
{

    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;

    const { searchTerm } = useParams();
    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&query=${searchTerm}`

    const urlDetails = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryDetails&query=${searchTerm}`
    const urlCards = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&query=${searchTerm}`

    let cardDataFetchedItems =[];

    fetchDataMulti([urlDetails,urlCards],handleSearchResults)

    useEffect(()=> {
        //fetchData(url1,handleCountryDetails);
        //fetchData(url2,handleCountryCards);
        //Start Async to Wait for Results
    },[])

    function handleSearchResults(data)
    {

        //Baue Array mit Countries bei denen der erste Fetch keine CountryCard daten gefunden hat, suche dann mit den IDs direkt
        let leftoverCountries = data[0].items.reduce(function(totalArray,currentCountry){
            let matched = false;

            for(let i = 0; i< data[1].items.length; i++)
            {
                if(currentCountry.sys.id == data[1].items[i].fields.details.sys.id)
                {
                    matched = true;
                    cardDataFetchedItems.push(data[1].items[i])
                    break;
                }
            }
            if(!matched)
            {
                totalArray.push(currentCountry);                
            }
            return totalArray;
        },[]);

        console.log("Countries left:", leftoverCountries);


        //details.sys.id[match]=

        let detail_Id = leftoverCountries[0].sys.id;
        const urls = leftoverCountries.map(country => {
            detail_Id = country.sys.id
            //const baseUrlCardsMissing = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&query=${detail_Id}`
            const baseUrlCardsMissing = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&fields.details.sys.id[match]=${detail_Id}`
            return baseUrlCardsMissing;
        });


        console.log("MissingURLS:", urls )
        console.log("FetchedDataItems:", cardDataFetchedItems )
        fetchDataMulti(urls,handleDataLeft);
    }

    function handleDataLeft(data)
    {
        console.log("FirstData", cardDataFetchedItems);
        console.log("SecondData", data);
        //Todo Combine Cards Data
        cardDataFetchedItems.push(data)
    }

    return (
        <>
            <Head title={`Suchergebnisse ${searchTerm}`} descr={`Suchergebnisse für: ${searchTerm}`} />
            <div>SearchResults</div>
        </>

        
        )
}