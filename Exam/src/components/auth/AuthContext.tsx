import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import AuthService from '../../../api-service/auth-service/AuthService';
import User from '../../../models/user-models/User';
import LoadingScreen from '../loading/LoadingScreen';
import StorageManager from '../storage/StorageManager';

const returnType: any = {};

export const AuthContext = createContext({
    user: null as User | undefined,
    isLoading: false,
    login: (userName: string, password: string) => returnType,
    logout: () => returnType,
});

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<User>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const login = (userName: string, password: string) => {
        setLoading(true);
        AuthService.login({UserName: userName, Password: password})
        .then((res) => {
            StorageManager.setAuthData(res.data);
            setUser(res.data.user);
        });
        setLoading(false);
    };
    const isLoggedIn = async () => {
        try{
            setLoading(true);
            const storedUser = await AsyncStorage.getItem("user");
            setUser(storedUser as User);
        }
        catch(e){
            console.warn("no user")
        }
        finally{
            setLoading(false);
        }
    }
    const logout = () => {
        setLoading(true);
        StorageManager.deleteAuthData();
        setUser(null);
        setLoading(false);
    }
    
    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                isLoading: isLoading,
                login: login,
                logout: logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};