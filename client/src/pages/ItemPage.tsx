import React from "react";
import { useFetch } from "src/hooks/useFetch";
import { Erreur } from "src/section/Erreur";
import { Loading } from "src/section/Loading";



type ItemProps = {
    name: string,
    categorie: string,
    description: string,
    id: string,
    image: string[],
    position : {adresse : string, longitude : number, latitude : number},
    price : number,
    publication_date : string,
}

export const ItemPage = () => {

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
            <div className="relative  sm:flex-row flex-col flex justify-around w-full sm:h-96  ">
                    <div className="">
                        <img src={data?.image[0]} className="  h-full w-full   rounded-t-2xl sm:rounded-tl-lg   sm:rounded-t-none object-cover"/>
                    </div>
                    <div className="">
                        <img src={data?.image[1]} className=" h-full w-full   object-cover"/>
                    </div>
                    <div className="">
                        <img src={data?.image[2]} className=" h-full w-full   rounded-none xs:rounded-tr-lg   object-cover"/>
                    </div>
            </div>
            <div className="flex flex-col bg-seocondary justify-between w-full h-96  text-baseplus text-primary rounded-b-lg p-8"> 
                <span className="font-semibold my-6">{data?.name}</span>
                <div className=" w-full rounded-2xl h-0.5 bg-primary"/>
                <p className="my-6">{data?.description}</p>
                <span className="my-6">{"Price : " + data?.price + "$"}</span>
                <span className="my-6">{"Location : " + data?.position.addresse}</span>
            </div>
            </>
            }
        </div>
    )
}