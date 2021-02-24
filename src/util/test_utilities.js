import {Provider} from "react-redux"

export const findTestByAttr = (wrapper, val) => wrapper.find(`[data-test=${val}]`)

export const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
)

export const options = {
    context: { store }
}

export const  init = {
    app: {
        user: {
            repositories: {
                nodes: [
                    {
                        createdAt:"2018-05-18T19:05:29Z",
                        description:null,
                        name:"hrsf96-databases",
                        url:"https://github.com/justinmeskan/hrsf96-databases",
                        viewerPermission:"ADMIN",
                        id:"MDEwOlJlcG9zaXRvcnkxMzM5OTM5NTE=",
                        __typename:"Repository",
                    },
                    {
                        createdAt:"2018-05-18T19:05:29Z",
                        description:null,
                        name:"Chessutt",
                        url:"https://github.com/justinmeskan/hrsf96-databases",
                        viewerPermission:"ADMIN",
                        id:"MDEwOlJlcG9zaXRvcnkxMzMuehM5NTE=",
                        __typename:"Repository",
                    }
                ]
            }
        },
        searchTerm: "justinmeskan",
        theme: false
    }
}

export const store = (initState= init) => ({
    subscribe: () => {},
    dispatch: () => {},
    getState: () => (initState)
})

