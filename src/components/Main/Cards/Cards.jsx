import React from 'react'
import Card from './Card'
import fetchData from '../../../utils/fetchAPI'
import { useEffect, useState } from 'react';


// Temp URL für fetch

// https://cdn.contentful.com/spaces/8es1vct37z1y/entries/?access_token=z9I4_II-o6y3ZX7lTgQxu2EU3ctK6C0dvKqGqG7JXKs&content_type=countryCard&include=0

export default function Cards() {

    const [countryArray, setCountryArray] = useState([])

    const url = `https://cdn.contentful.com/spaces/8es1vct37z1y/entries?access_token=z9I4_II-o6y3ZX7lTgQxu2EU3ctK6C0dvKqGqG7JXKs&content_type=countryCard`

    function handleData(data) {
        setCountryArray(data.items)
    }

    function handleData2(data) {
        const { fileName: gotImgName, url: gotImgUrl } = data.fields.file
        setCountryImg(gotImgUrl)
        console.log("ImgURL: ", countryImg)

    }

    useEffect(() => {
        fetchData(url, handleData)
    }, []);


    return (
        <div className="container py-4" id="overview">
            <div className="row row-cols-2 row-cols-md-3 g-3">
                {countryArray.map((country) => <Card
                    key={country?.fields.name}
                    country={country?.fields.name}
                    imgId={country?.fields.image.sys.id}
                    text={country?.fields.teaserText} />)}
            </div>
        </div>
    )
}
