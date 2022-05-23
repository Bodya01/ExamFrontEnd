import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import AuthService from '../../../api-service/auth-service/AuthService';
import User from '../../../models/user-models/User';
import StorageManager from '../storage/StorageManager';

const returnType: any = {};

export const AuthContext = createContext({
    user: null as User | undefined,
    isLoading: false,
    hasLoginError: false,
    login: (userName: string, password: string) => returnType,
    logout: () => returnType,
});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasLoginError, setHasLoginError] = useState<boolean>(false);
    const login = (userName: string, password: string) => {
        setIsLoading(true);
        AuthService.login({ UserName: userName, Password: password })
            .then((res) => {
                StorageManager.setAuthData(res.data);
                setHasLoginError(false);
                setUser(res.data.user);
            })
            .catch((err) => {
                setHasLoginError(true);
            })
        setIsLoading(false);
    };
    const isLoggedIn = async () => {
        try {
            const storedUser = await AsyncStorage.getItem("user");
            setUser(storedUser as User);
        }
        catch (e) {
            console.warn("no user")
        }
    }
    const logout = () => {
        setIsLoading(true);
        StorageManager.deleteAuthData();
        setUser(null);
        setIsLoading(false);
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user: user,
                isLoading: isLoading,
                hasLoginError: hasLoginError,
                login: login,
                logout: logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};