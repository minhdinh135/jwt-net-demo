import { useState } from "react";
import { LoginService } from "../service/ApiService";

export function Login({ setToken }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try{
            const token = await LoginService({
                email: email,
                password: password,
                role: role
            });
            setToken(token);
            setError("")
            setSuccess("Login successfull");
        }
        catch(err){
            if(err.response?.data){
                setError(err.response?.data);
            }
            else{
                setError(
                    error.response?.data?.message || 
                    "An error occurred. Please try again later."
                );
            }
            setSuccess("");
            console.log(err);
        }
    }

    return (
        <div style={{ display: 'flex', margin: "50px 50px", flexDirection: 'column', width: "50%"}}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} style={{height: "30px"}} type="text" />
          <label>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} style={{height: "30px"}} type="password" />
          <label>Role</label>
          <input value={role} onChange={(e) => setRole(e.target.value)} style={{height: "30px"}} type="text" />
          <div style={{color: "red", marginTop: "10px"}}>{error}</div>
          <div style={{color: "green", marginTop: "10px"}}>{success}</div>

          <button onClick={handleLogin} style={{marginTop: "20px"}}>Login</button>
        </div>
    )
}
