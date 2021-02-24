import React from 'react'
import Card from '../Card/Card'
import { useSelector } from "../Hooks/Hooks"
import styled from 'styled-components'

const UlStyles = styled.ul`
  margin: 0 128px 0 64px;
`

export default function Display() {
    const repos = useSelector(state => state.app.user.repositories)

    return (
        <div data-test={"component_display"} className="Display_wrapper">
            <UlStyles data-test={"component_display_ul"} className={"Display_ul"}>
                { repos.nodes.map((repo, i) => ( <Card key={i} repo={repo} /> ) ) }
            </UlStyles>
        </div>
    )
}
