import React from 'react'
import Card from './Card'
import fetchData from '../../../utils/fetchAPI'
import { useEffect, useState } from 'react';
import CardPages from './CardPages';


export default function Cards() {

    const [countryArray, setCountryArray] = useState([])

    const url = `https://cdn.contentful.com/spaces/8es1vct37z1y/entries?access_token=z9I4_II-o6y3ZX7lTgQxu2EU3ctK6C0dvKqGqG7JXKs&content_type=countryCard`

    function handleData(data) {
        setCountryArray(data.items)
    }

    useEffect(() => {
        fetchData(url, handleData)
    }, []);

    function createCards () {
        return countryArray.map((country) => <Card
                    key={country?.fields.name}
                    country={country?.fields.name}
                    imgId={country?.fields.image.sys.id}
                    text={country?.fields.teaserText} />)
    }


    return (
                <CardPages countryCards={createCards()} />
    )
}
