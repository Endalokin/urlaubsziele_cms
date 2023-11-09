import { useEffect,useState } from "react";
import fetchData, { fetchDataMulti } from "../../../utils/fetchAPI";
import { useParams } from "react-router-dom";
import Head from '../../../utils/Head';

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
        data[0].items.forEach(element => {
            console.log("Land:", element.fields.name)
        });

        //Compare Country IDs with Links in CountryCards, if no match put name in new array for which the CountryCards have to be fetched
        let leftoverCountries = data[0].items.map(country => {
            let matched = false;

            for(let i = 0; i< data[1].items.length; i++)
            {
                console.log("Country", country.fields.name , " ID: " ,country.sys.id)
                console.log("Country", data[1].items[i].fields.name , " LinkID: " ,data[1].items[i].fields.details.sys.id)
                if(country.sys.id == data[1].items[i].fields.details.sys.id)
                {
                    console.log("Found match: ", country.fields.name)
                    matched = true;
                    break;
                }
            }
            if(!matched)
            {
                return country;
            }
        })

        console.log("Countries left:", leftoverCountries);





    }

    return (
        <>
            <Head title={`Suchergebnisse ${searchTerm}`} descr={`Suchergebnisse für: ${searchTerm}`} />
            <div>SearchResults</div>
        </>

        
        )
}