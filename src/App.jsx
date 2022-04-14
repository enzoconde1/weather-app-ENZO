import React from "react";
import {
    BrowserRouter as Router, Route,
    Switch
} from "react-router-dom";
import CiudadPage from "./pages/CiudadPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage/>
                </Route>
                <Route path="/main">
                    <MainPage/>
                </Route>
                <Route path="/city">
                    <CiudadPage/>
                </Route>
                <Route>
                <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
