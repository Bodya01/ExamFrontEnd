import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../activity/login-page/Login';
import AppTabs from '../tabs/AppTabs';
import User from '../../../models/user-models/User';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const Routes = () => {
    const {isLoading, user} = useContext(AuthContext);
    const {colors} = useTheme();

    return(
        <NavigationContainer>
            {isLoading
                ?(
                    <View style={[{flex: 1, alignSelf: "stretch", backgroundColor: colors.white}]}>
                        <ActivityIndicator size={"large"}/>
                    </View>
                )
                :(user === null as User)
                ? <Login/>
                : <AppTabs/> 
            }
        </NavigationContainer>
    )
}

export default Routes;