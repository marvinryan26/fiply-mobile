import React, { useState } from "react";
import fiplyServer from "./api/fiplyServer";
import * as SecureStore from 'expo-secure-store';


const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const AuthFunctions = {
        user,
        setUser,
        error,
        login: async (email, password) => {
            await fiplyServer.post('/login',{
                email,
                password
            }).then(response => {
                console.log(response.data);
                const userData = {
                    email: response.data.data.email,
                    token: response.data.data.token
                }

                setUser(userData)
                setError(null)
                SecureStore.setItemAsync('user', JSON.stringify(userData))
            }).catch(err => {
                console.log(err.response.data);
                setError(err.response.data.message)
            })
        },
        logout : async () => {
            await fiplyServer.post('/logout', {})
                .then(response => {
                    SecureStore.deleteItemAsync('user')
                    setUser(null)
                }).catch(err => {
                    console.log(err.response.data);
                    setError(err.response.data.message)
                })
        }
    }


    return (
        <AuthContext.Provider value={AuthFunctions}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }