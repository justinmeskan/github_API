import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reduxStore, { history } from './store/index'
import { ConnectedRouter } from 'connected-react-router'
import { routes } from './routes/routes'
import {BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from "@apollo/client"
import ApolloClient from "apollo-boost"
import "regenerator-runtime/runtime.js"

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    request: async operation => {
        operation.setContext({
            headers: {
                authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
            }
        })
    }
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={reduxStore}>
            <ConnectedRouter history={history}>
                    <Router>
                        { routes }
                    </Router>
            </ConnectedRouter>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
)

