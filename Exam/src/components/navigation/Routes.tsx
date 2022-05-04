import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../../activity/login-page/Login';
import AppTabs from '../tabs/AppTabs';
import User from '../../../models/user-models/User';

const Routes = () => {

    const {user} = useContext(AuthContext);

    return(
        <NavigationContainer>
            {(user === null as User)
            ? <Login/>
            : <AppTabs/> 
        }
        </NavigationContainer>
    )
}

export default Routes;