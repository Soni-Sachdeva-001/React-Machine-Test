import React, {PureComponent} from 'react';
import {LoginScreen} from "./screens/LoginScreen/LoginScreen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import {FirstUser} from "./screens/FirstUser/FirstUser";
import {SecondUser} from "./screens/SecondUser/SecondUser";

class App extends PureComponent <{},{}> {
    render() {
        return (
            <div >
                <BrowserRouter>
                    <Route
                        exact
                        path='/'
                        component={LoginScreen}
                    />

                    <Route
                        exact
                        path='/home'
                        component={HomeScreen}
                    />

                    <Route
                        exact
                        path='/user1'
                        component={FirstUser}
                    />

                    <Route
                        exact
                        path='/user2'
                        component={SecondUser}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
