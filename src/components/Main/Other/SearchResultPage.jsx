import { useEffect,useState } from "react";
import fetchData, { fetchDataMulti } from "../../../utils/fetchAPI";
import { useParams } from "react-router-dom";
import Head from '../../../utils/Head';

export default function SearchResultPage()
{

    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;
    const [searchResults, setSearchResults] = useState([]);
    console.log("State:", searchResults);

    const { searchTerm } = useParams();
    //const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&query=${searchTerm}`
    const urlDetails = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryDetails&query=${searchTerm}`
    const urlCards = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&query=${searchTerm}`

    let cardDataFetchedItems =[];

    useEffect(()=> {
        console.log("First Render")
        fetchDataMulti([urlDetails,urlCards],handleSearchResults)
        //Start Async to Wait for Results
    },[searchTerm])

    function handleSearchResults(data)
    {
        const detailData = data[0];
        const cardData = data[1];
        let leftoverCountries = []
        //console.log("FirstData ",data)
        console.log("DetailData Items ",detailData.items," Length:", detailData.items.length)
        console.log("CardData Items ",cardData.items," Length:", cardData.items.length)
        if(detailData.items.length > 0 && cardData.items.length > 0)
        {
        console.log("Results in Both ",data)
        //Build Array with Countries for which i dont also have a CountryCard Data already, then use CountryDetail ID to find Card Data
            leftoverCountries = detailData.items.reduce(function(totalArray,currentCountry){
                let matched = false;
                for(let i = 0; i< cardData.items.length; i++)
                {
                    if(currentCountry.sys.id == cardData.items[i].fields.details.sys.id)
                    {
                        matched = true;
                        cardDataFetchedItems.push(cardData.items[i])
                        break;
                    }
                }
                if(!matched)
                {
                    totalArray.push(currentCountry);                
                }
                return totalArray;
            },[]);

        }
        else if(detailData.items.length > 0)
        {
            console.log("Only CountryDetail Results ",data)
            detailData.items.forEach(country => {
                leftoverCountries.push(country)
            });
        }
        else if(cardData.items.length > 0)
        {
            console.log("Only CountryCard Results ",data)
            cardData.items.forEach(country => {
                cardDataFetchedItems.push(country)
            });  
        }
        else
        {
            console.log("No Search Results")
        }

        console.log("Left to search:", leftoverCountries.length)

        //If More Countries to fetch do that and update state later, else Update State Now
        // Build array of fetch URLS, looking for matching ID from Details in CountryCards fields.details.sys.id
        if(leftoverCountries.length > 0)
        {
            const urls = leftoverCountries.map(country => {
                const detail_Id = country.sys.id
                const baseUrlCardsMissing = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&content_type=countryCard&fields.details.sys.id[match]=${detail_Id}`
                return baseUrlCardsMissing;
            });
            fetchDataMulti(urls,handleDataLeft);
        }
        else 
        {
            setSearchResults(cardDataFetchedItems);
        }
    }

    function handleDataLeft(data)
    {
        //Kombiniere mit zuerst gefundenen Cards Items
        data.forEach(element => {
            cardDataFetchedItems.push(element.items[0])
        });
        setSearchResults(cardDataFetchedItems);
    }

    return (
        <>
            <Head title={`Suchergebnisse ${searchTerm}`} descr={`Suchergebnisse für: ${searchTerm}`} />
            <div>SearchResults</div>
        </>

        
        )
}