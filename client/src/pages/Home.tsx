
import { useFetch } from "src/hooks/useFetch";
import { Erreur } from "src/section/Erreur";
import { Loading } from "src/section/Loading";

import { ItemCard } from "../components/builder/ItemCard"
import React from "react";
import { Link } from "react-router-dom";


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

export const Home = () => {

    const [query,setQuery] = React.useState<string>("");
    const {data, error, loading} = useFetch("https://marche-puces.azurewebsites.net/items?limit=100");
    
    function handleChange(e : any) {
        setQuery(e.target.value)
      }
    
    React.useEffect(() => {

    }, [data]);

    return (
        <div className="h-fit flex flex-col w-full mb-16 relative z-0">
            <form className="bg-secondary w-[85%] flex mx-auto p-4 rounded-xl shadow-black shadow-2xl mb-8">
                <label className="text-lg text-primary my-auto mr-4  whitespace-nowrap font-semibold">Search : </label>
                <input onChange={handleChange} placeholder="Search ..." value={query} type="search"
                className=" p-4 rounded-2xl w-full"/>
                {query}
            </form>
            <div className="mt-4 mb-8 w-[85%] h-fit py-8 bg-secondary mx-auto rounded-2xl shadow-black shadow-2xl">
                {loading && <Loading/>}
                {error ? 
                    <Erreur code="Impossible de rejoindre le serveur"/> :
                    <div className="GridInventaire">
                        { 
                        data?.filter((e : ItemProps) => {
                            if (query == ""){
                                return e;
                            } else if (e.name.toLowerCase().includes(query.toLowerCase())) {
                                return e;
                            }})
                        .map((props : ItemProps, index : number) => {
                            return (
                                <Link to={`/item/${props.id}`}>
                                    <ItemCard key={index} {...props}/>
                                </Link>
                            )
                        })}
                    </div>
                    }
            </div>

        </div>
    )


}