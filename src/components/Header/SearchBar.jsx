import React from 'react'
import { useState } from 'react';
import fetchData from '../../utils/fetchAPI';

export default function SearchBar() {


    //https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}&query={value}

    const[searchValue,setSearchValue] = useState("");
    const[searchResult,setSearchResult] = useState({data:null,timeStamp:Date.now()});

    const { VITE_CF_TOKEN, VITE_SPACE_ID } = import.meta.env;


    function handleInput(input)
    {
        const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries?access_token=${VITE_CF_TOKEN}&query=${input}`
            console.log("SearchTrigger")
            setSearchValue(input)
            fetchData(url,handleSearchResult)
    }

    function handleSearchResult(_data,timeStamp)
    {
        console.log("SearchResult",_data)
        if(timeStamp > searchResult.timeStamp)
        {
            console.log("Overwrite SearchResult",_data, "NewTime:", timeStamp,"OldTime:", searchResult.timeStamp);
            setSearchResult({data: _data,timeStamp:timeStamp});
        }
        else{
            console.log("Old request,Discard Results",_data, "NewTime:", timeStamp,"OldTime:", searchResult.timeStamp);
        }

    }




//        <form className="d-flex" role="search">         </form>
    return (
            <>
            <div className="d-flex" role="search">
            <input className="form-control me-2" onChange={e => handleInput(e.target.value)} value={searchValue} type="search" placeholder="Urlaubsziel suchen" aria-label="search" id="datatable-search-input" />
            <button className="btn btn-outline-success fw-medium" type="submit">Suchen</button>
            </div>
            </>
    )
}
