import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import AuthService from '../../../api-service/auth-service/AuthService';
import User from '../../../models/user-models/User';
import StorageManager from '../storage/StorageManager';

const returnType: any = {};

export const AuthContext = createContext({
    user: null as User | undefined,
    login: (userName: string, password: string) => returnType,
    logout: () => returnType,
});

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<User>(null);

    const login = (userName: string, password: string) => {
        AuthService.login({UserName: userName, Password: password})
        .then((res) => {
            StorageManager.setAuthData(res.data);
            setUser(res.data.user);
        });
    };
    const isLoggedIn = async () => {
        try{
            const storedUser = await AsyncStorage.getItem("user");
            setUser(storedUser as User);
        }
        catch(e){
            console.warn("no user")
        }
    }
    const logout = () => {
        StorageManager.deleteAuthData();
        setUser(null);
    }
    
    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                login: login,
                logout: logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};