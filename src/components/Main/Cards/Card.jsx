import React, { useState, useEffect } from 'react'
import fetchData from '../../../utils/fetchAPI';
import { NavLink } from 'react-router-dom';

export default function Card({ country, imgId, text, detailsId }) {
    const { VITE_CF_TOKEN, VITE_SPACE_ID, VITE_SIGHTENGINE_USER, VITE_SIGHTENGINE_SECRET } = import.meta.env;
    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/${imgId}?access_token=${VITE_CF_TOKEN}&w=100`;
    const [imgUrl, setImgUrl] = useState("")
    const [borderColor, setBorderColor] = useState("white")
    const [fontColor, setFontColor] = useState("black")

    function handleData(data) {
        setImgUrl(data.fields.file.url + "?fm=webp&h=400")
    }

    useEffect(() => {
        fetchData(url, handleData)
    }, []);

    function handleData2(data) {
        console.log(data)
        setBorderColor(data.colors.dominant.hex)
        if (data.colors.accent) {
            setFontColor(`${data.colors.accent[0].r}, ${data.colors.accent[0].b}, ${data.colors.accent[0].g}`)
        } else {
            setFontColor(`${data.colors.other[0].r}, ${data.colors.other[0].b}, ${data.colors.other[0].g}`)
        }
    }


    useEffect(()=> {
        if (imgUrl) {
            const url2=`https://api.sightengine.com/1.0/check.json?url=https:${imgUrl}&models=properties&api_user=${VITE_SIGHTENGINE_USER}&api_secret=${VITE_SIGHTENGINE_SECRET}`
            fetchData(url2, handleData2)
        }
    }, [imgUrl])

    return (
        <>
            <div className="col">
                <div className="td_selector card h-100 shadow border-light active" data-traveldest="Frankreich" style={{ overflow: "hidden", backgroundColor: `rgba(${fontColor}, .1)` }}>
                    <NavLink to={`detailPage/${detailsId}`} className="link-dark link-underline link-underline-opacity-0">
                        <img src={imgUrl} alt="" className="card-img-top object-fit-cover" style={{ height: "30vh", minHeight: "4em", border: `10px solid ${borderColor}` }} />
                        <div className="card-img-overlay d-md-none text-center text-bg-dark bg-opacity-50" style={{ height: "10vh", minHeight: "2em", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h2><strong>{country}</strong></h2>
                        </div>
                        <div className="card-body d-none d-md-block">
                            <h2 className="card-title">{country}</h2>
                            <p className="card-text">
                                {text}
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
