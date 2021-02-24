import React from 'react'
import { useApolloClient } from '@apollo/client'
import {useDispatch, useSelector} from '../Hooks/Hooks'
import { searchTxt } from './searchQuery'
import { GET_REPOS }from '../../store/reducers/app/appAction'
import Display from '../Display/Display'
import Loading from '../Loading/Loading'

export  function FetchRepos() {
    const dispatch = useDispatch()
    const query = useSelector(state => state.app.searchTerm)

    const {loading, error} = useApolloClient().query({
            query: searchTxt,
            variables: {userId: query},
            errorPolicy: 'all'
        }).then((repos) => {
            if (loading) {
                return (<Loading />)
            }
            if (error) {
                console.log("Error i the app", error)
            }

            if (repos) {
                console.log('repo', repos)
                dispatch({type: GET_REPOS, payload: repos.data.user})

            }
        })
    return (
        <Display />
    )
}
