type ErreurProps = {
    code : string
  }

export const Erreur = (props : ErreurProps) => {
    
    return (
        <main className="w-full h-96 flex flex-col justify-around">
            <div className="m-auto flex flex-row text-center md:text-left">
                <div role="alert" className="text-stone-200 self-center shadow-2xl shadow-neutral-900 drop-shadow-xl  border-neutral-800 border-2 rounded-md">
                    <div className="bg-red-700 GrosseurTitre font-bold rounded-t px-4 py-2 flex flex-col md:block justify-around ">
                        <span>Erreur : </span>
                        <span className="GrosseurSousTitre">{props.code}</span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around GrosseurSousTitre  rounded-b border-t-2 border-neutral-800 bg-red-500 px-4 py-3">
                        <span>Désolé, une erreur s'est glissée.</span>
                        <span className="ml-2">Veuilliez réessayez plus tard.</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
