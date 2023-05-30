import axios from "axios";
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateLogged, updateUser } from "src/store";

type UserProps = {
    id: string,
    name: string,
    email: string,
    favorites : string[],
    token: string,
}

export const Connection = () => {

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [name, setName] = React.useState<string>("");
    const [email2, setEmail2] = React.useState<string>("");
    const [password2, setPassword2] = React.useState<string>("");
    const [data,setData] = React.useState<any | undefined>();
    const [error,setError] = React.useState<boolean>(false);
    const [loading,setLoading] = React.useState<boolean>(true);

    const dispatch = useDispatch();

    async function ConnnectUser(argToken : string){
        try {
            console.log(argToken);
            const result = await axios.get("https://marche-puces.azurewebsites.net/tokeninfo", {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': argToken
                  }
                })
            setLoading(false);
            setData(result.data.data);
        } catch(error){
            console.log(error);
            setLoading(false);
            setError(true);
        };
        console.log(data);
        dispatch(updateLogged(false));
        dispatch(updateUser(data));
    }


    async function handleLogin(e : any){
        e.preventDefault();
        try {
            const response = await fetch(
                "https://marche-puces.azurewebsites.net/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                }
            );
    
            const data = await response.json();
            console.log(data.token);
            ConnnectUser(data.token);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleRegister(e : any){
        e.preventDefault();
        try {
            const response = await fetch(
                "https://marche-puces.azurewebsites.net/signin",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name : name,
                        email: email2,
                        password: password2,
                    }),
                }
            );
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        ;
    }

    React.useEffect(() => {
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-between w-full text-primary">
            <div className="flex flex-col bg-secondary h-[42rem] p-2 w-4/5 md:w-[48%] mx-auto rounded-2xl shadow-2xl shadow-black text-center my-4">
                <span className="text-xl my-4">Login</span>
                <div className=" border-[3px] w-[90%] rounded-2xl mx-auto my-4"/>
                <form onSubmit={handleLogin} className="flex flex-col items-center justify-around  text-lg w-[90%] mx-auto h-full ">
                    <div className="flex flex-col justify-between w-full">
                        <label htmlFor="email" className=" align-middle text-xl mx-4 my-4 whitespace-nowrap">
                            Email :      
                        </label>
                        <input type="email" placeholder="exemple@domaine.com" onChange={(e) => setEmail(e.target.value)} className="rounded-2xl p-3 w-full text-secondary"/>
                    </div>
                    <div  className="flex flex-col justify-between w-full">
                        <label htmlFor="password" className=" align-middle text-xl mx-4 my-4 whitespace-nowrap">Password : </label>
                        <input type="password" placeholder="*********"  onChange={(e) => setPassword(e.target.value)}  className="rounded-2xl p-3 w-full text-secondary" />
                    </div>
                    <button type="submit" value={"Submit"}
                    className="mx-auto w-4/5 my-4 bg-secondary rounded-full p-2 text-action hover:bg-primary cursor-pointer border-[3px] border-action">
                        <span className="text-lg my-4">Login</span>
                    </button>
                </form>
            </div>
            <div className="flex flex-col bg-secondary h-[42rem] p-2 w-4/5 md:w-[48%] mx-auto rounded-2xl shadow-2xl shadow-black text-center my-4">
                <span className="text-xl my-4">Register</span>
                <div className=" border-[3px] w-[90%] rounded-2xl mx-auto my-4"/>
                <form onSubmit={handleRegister} className="flex flex-col justify-around h-full items-center text-lg w-[90%] mx-auto ">
                    <div className="flex flex-col  justify-between w-full">
                        <label htmlFor="email" className=" align-middle text-xl m-4 whitespace-nowrap">
                            Username :      
                        </label>
                        <input type="text" placeholder="Example123"  onChange={(e) => setName(e.target.value)} className="rounded-2xl p-3 w-full text-secondary"/>
                    </div>
                    <div className="flex flex-col  justify-between w-full">
                        <label htmlFor="email" className="align-middle text-xl m-4 whitespace-nowrap">
                            Email :      
                        </label>
                        <input type="email" placeholder="exemple@domaine.com"  onChange={(e) => setEmail2(e.target.value)} className="rounded-2xl p-3 w-full text-secondary"/>
                    </div>
                    <div  className="flex flex-col justify-between w-full">
                        <label htmlFor="password" className=" align-middle text-xl m-4 whitespace-nowrap">Password : </label>
                        <input type="password" placeholder="*********"  onChange={(e) => setPassword2(e.target.value)} className="rounded-2xl p-3 w-full text-secondary" />
                    </div>
                    <button type="submit" value={"Submit"}
                    className="mx-auto w-4/5 my-4 bg-secondary rounded-full p-2 text-action hover:bg-primary cursor-pointer border-[3px] border-action ">
                        <span className="text-lg my-4">Register</span>
                    </button>
                </form>
            </div>
        </div>

    )
}