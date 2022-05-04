import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import AuthService from '../../../api-service/auth-service/AuthService';
import User from '../../../models/user-models/User';

const returnType: any = {};

export const AuthContext = createContext({
    user: null as User | undefined,
    login: (userName: string, password: string) => returnType,
});

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<User>(null);
    const login = (userName: string, password: string) => {
        AuthService.login({UserName: userName, Password: password})
        .then((res) => {
            AsyncStorage.setItem("userToken", res.data.jwtToken);
            AsyncStorage.setItem("tokenId", res.data.jwtId);
            AsyncStorage.setItem("expireTime", res.data.jwtExpireTime);
            AsyncStorage.setItem("refreshToken", res.data.refreshToken);
            AsyncStorage.setItem("user", JSON.stringify(res.data.user));
            setUser(res.data.user);
        })
        .catch(() => console.warn("Unable to login"));
    };
    const isLoggedIn = async () => {
        try{
            const u = await AsyncStorage.getItem("user")
            console.log(JSON.stringify(u));
            setUser(u as User);
        }
        catch(e){
            console.warn("no user")
        }
    }
    
    useEffect(() => {
        isLoggedIn().then(() => {});
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                login: login,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};