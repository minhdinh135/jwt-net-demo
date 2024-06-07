import { useEffect, useState } from "react";
import { HelloWorldService } from "../service/ApiService";

export function HelloWorld({ token, reloadToken }) {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const getHelloWorld = async () => {
        try{
            const hello = await HelloWorldService({token: token})
            setMessage(hello);
        }
        catch(err){
            if(err.response.status == 401){
                setError("Please log in");
            }
            else if(err.response.status == 403){
                setError("Unauthorize");
            }
            else{
                setError(
                    error.response?.data?.message || 
                    "An error occurred. Please try again later."
                );
            }
            setMessage("");
        }
    }

    useEffect(() => {
        reloadToken();
        getHelloWorld()
    }, [])

    return (
        <div>
            <h1>{message}</h1>
            <h3 style={{color: "red"}}>{error}</h3>
        </div>
    )
}
