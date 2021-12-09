import React, { Suspense, useContext } from "react";
import { Context } from ".";

import { useAuthState } from 'react-firebase-hooks/auth'
// import { Dashboard } from "./components/pages/Dashboard/Dashboard";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { Redirect, Route, Switch } from "react-router-dom";
import { Preloader } from "./components/Preloader/Preloader";


const Registration = React.lazy(() => import("./components/pages/Registration/Registration"))
const Login = React.lazy(() => import("./components/pages/Login/Login"))
const Dashboard = React.lazy(() => import("./components/pages/Dashboard/Dashboard"))
const SearchCrypto = React.lazy(() => import("./components/pages/SearchCrypto/SearchCrypto"))


export const AppRouter = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return user?.emailVerified
        ? (
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/dashboard" exact render={() => <Suspense fallback={<Preloader />}> <Dashboard /></Suspense>} />
                <Route path="/crypto" exact render={() => <Suspense fallback={<Preloader />}> <SearchCrypto /></Suspense>} />

                <Redirect to='/' />
            </Switch>
        )
        :
        (
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/dashboard" exact render={() => <Suspense fallback={<Preloader />}> <Dashboard /></Suspense>} />
                <Route path="/crypto" exact render={() => <Suspense fallback={<Preloader />}> <SearchCrypto /></Suspense>} />
                <Route path="/login" exact render={() => <Suspense fallback={<Preloader />}> <Login /></Suspense>} />
                <Route path="/registration" exact render={() => <Suspense fallback={<Preloader />}> <Registration /></Suspense>} />
                <Redirect to='/login' />
            </Switch>
        )
}