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
export const ItemCard = (props : ItemProps) => {
    
    return (
    <div className="w-60 h-72 text-sm rounded-xl  mx-auto flex flex-col justify-around text-center  shadow-2xl shadow-neutral-900 drop-shadow-xl cursor-pointer border-[3px] border-action hover:scale-110 transition-all -z-0">
        <div className="relative h-[16rem] ">
            <img src={props.image[0]} className="w-full h-full  rounded-t-lg   object-contain" alt="Gabriel Lafrance Project"/>
        </div>
        <div className="flex flex-col bg-primary  justify-between w-full h-full text-secondary  rounded-b-lg"> 
            <span className="mt-6">{props.name}</span>
            <span className="mb-6">{"Price : " + props.price + "$"}</span>
        </div>
     </div>
    );
}