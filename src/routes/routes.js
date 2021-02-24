import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../components/App/App'

export const NoRoutePage = () => (
    <div>
        <h2>Oopsie! Nothing here.. move on PLEASE!</h2>
    </div>
)

export const routes = (
    <Switch>
        <Route path='/' exact={true}> <App /> </Route>
        <Route path='*'> <NoRoutePage /> </Route>
    </Switch>
)
