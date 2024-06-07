import axios from "axios";
import getEndpoint from "./getEndpoint";

export async function LoginService(credentials) {
    const response = await axios.post(`${getEndpoint()}/api/User/Login`, credentials);
    return response.data;
}

export async function HelloWorldService(credentials) {
    const response = await axios.get(`${getEndpoint()}/api/Test`, {
        headers: {
            Accept: "*/*",
            Authorization: `Bearer ${credentials.token}`
        }
    });
    return response.data;
}

