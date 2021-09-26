import { useState } from "react";
import fiplyServer from "../api/fiplyServer";

const useAuth = () => {

    const [error, setError] = useState('')
    const [token, setToken] = useState('')

    const login = async (email, password, callback) => {

        await fiplyServer.post('/login', {
            email : email,
            password: password
        }).then(response => {
            console.log(response.data);
            if(callback) callback()
        }).catch(err => {
            console.log(err.response.data);
            setError(err.response.data.message)
        })

    }

    return [login, error, token]


}


export default useAuth