import axios from "axios";
import {IAuth} from "./types";

export const login = async (paylaod: {email: string, password: string}) => {
    const {data} = await axios.post<IAuth>(
        "https://reqres.in/api/login",
        {email: paylaod.email, password: paylaod.password},
        {
            headers: {
                "Contentp-Type" : "application/json",
                Accept: 'application/json'
            }
        }
    )

    return data
}

export const signup = async (paylaod: {email: string, password: string}) => {
    const {data} = await axios.post<IAuth>(
        "https://reqres.in/api/login",
        {...paylaod},
        {
            headers: {
                "Contentp-Type" : "application/json",
                Accept: 'application/json'
            }
        }
    )

    return data
}
