import React from "react";
import { AuthProvider } from "../components/auth/AuthContext";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import Routes from "../components/navigation/Routes";

const Providers = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                    <Routes />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default Providers;