import axios from "axios";
import React from "react";

export const useFetch = (url : string) =>{
    const [data,setData] = React.useState<any | undefined>();
    const [error,setError] = React.useState<boolean>(false);
    const [loading,setLoading] = React.useState<boolean>(true);

    async function fetchData(){
        try {
            const result = await axios.get(url);
            setLoading(false);
            setData(result.data);
        } catch(error){
            console.log(error);
            setLoading(false);
            setError(true);
        };
    }

    React.useEffect(() => {
        fetchData();
    }, [url]);
    
    return {data, error ,loading};
}