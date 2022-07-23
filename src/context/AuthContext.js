import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {CircularProgress} from "@mui/material";
import {BASE_URL} from "../baseUrl";
import {useLocalStorage} from "../hook/useLocalStorage";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext({});

export const useAuth = ()=> {
    return useContext(AuthContext);
}


const setSession = (accessToken)=> {
    localStorage.setItem("accessToken", accessToken);
}

const setUser = (user)=> {
    localStorage.setItem("user", JSON.stringify(user));
}

export const AuthProvider = ({ children })=> {
    const [currentUser, setCurrentUser] = useLocalStorage("user", null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // const signup = (email, password, fullName) => {
    //     let data = {
    //         email: email,
    //         password: password,
    //         name: fullName
    //     }
    //     return new Promise(function (resolve, reject) {
    //         axios.post(`${BASE_URL}/register` , data).then((response)=> {
    //             console.log(response.data);
    //         }).catch((err)=> {
    //             console.log(err);
    //         });
    //         // createUserWithEmailAndPassword(email, password).then((ref) => {
    //         //     ref.user.updateProfile({
    //         //         displayName: fullName,
    //         //     });
    //         //     resolve(ref);
    //         // })
    //         //     .catch((error) => reject(error));
    //     });
    // };

    const signIn = (email, password) => {
        let data = {
            'username': email,
            'password': password,
            'client_id': 'halal-food-client-id',
            'client_secret': 'halal-food-client-secret',
            'grant_type': 'password'
        };
        return new Promise(function (resolve, reject) {
            axios.post(`${BASE_URL}/oauth/token`, null, {
                params: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((response)=> {
                setUser(response.data.user);
                setCurrentUser(response.data.user);
                setSession(response.data.access_token);
                resolve(response);
            }).catch((err)=> {
                console.log(err);
                reject(err);
            });
        });
    };

    const signOut = () => {
        setCurrentUser(null);
        setUser(null);
        navigate("/", { replace: true });
    }

    // const passwordReset = (email) => {
    //     return new Promise(function (resolve, reject) {
    //         // auth.sendPasswordResetEmail(email).then(() => {
    //         //     resolve(`Password Reset Email sent to ${email}`);
    //         // }).catch((error) => {
    //         //     reject(error);
    //         // });
    //     });
    // };


    const value = useMemo(
        () => ({
            currentUser,
            signIn,
            signOut
        }),
        [currentUser]
    );

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
            {loading && <CircularProgress/>}
        </AuthContext.Provider>
    );
}