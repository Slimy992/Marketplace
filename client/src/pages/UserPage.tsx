import React from "react";
import { useFetch } from "src/hooks/useFetch";
import { Erreur } from "src/section/Erreur";
import { Loading } from "src/section/Loading";




export const UserPage = () => {

    const {data, error, loading} = useFetch("https://marche-puces.azurewebsites.net/items/" + getId());


    function getId() : string{
        return window.location.href.replace('http://localhost:4200/item/',"")
    }

    React.useEffect(() => {
    }, [data]);

    return (
        <div className="h-fit mx-auto w-4/5 bg-secondary rounded-2xl shadow-black shadow-2xl text-primary mb-8">
        {loading && <Loading/>}
        {error ? 
            <Erreur code="Impossible de rejoindre le serveur"/> :
            <>

            </>
            }
        </div>
    )
}