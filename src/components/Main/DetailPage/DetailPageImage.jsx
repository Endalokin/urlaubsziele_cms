import { useEffect, useState } from "react";
import fetchData from "../../../utils/fetchAPI";

export default function DetailPageImage({assetID, classname, htmlID,alt,style})
{
    const [imgURL,setImgURL] = useState();

    const {VITE_CF_TOKEN,VITE_SPACE_ID} = import.meta.env;
    const url = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/assets/${assetID}?access_token=${VITE_CF_TOKEN}`

    

    //  <img id="selected_dest_imagepath" src="images/schweden_800px.jpg" alt="country" className="img-fluid object-fit-cover rounded" style={{ height: "100%" }} />

    useEffect(()=>{

        fetchData(url,handleAssetData)


    },[]);

    function handleAssetData(assetData)
    {
        console.log("Asset:", assetData);
        setImgURL(assetData.fields.file.url)
    }



    return (
    <>
        <img src={imgURL} className={classname} id={htmlID} alt={alt} style={style} />
    </>
  
    
    )


}