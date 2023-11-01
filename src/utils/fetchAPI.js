

// dataCallback should be a function which takes 1 parameter for the data returned
export default async function fetchData(url,dataCallback,abortSignal)
{

    try{
        const response = await fetch(url,{abortSignal});
        //console.log("Response", response);
        const data = await response.json();
        //console.log("Data", data);
        dataCallback(data);

    }
    catch(error)
    {
        console.log("Error", error.message);
        

    }




}