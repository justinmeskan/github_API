import React from 'react'
import styled from 'styled-components'

const CardStyles = styled.li`
  background: ${(props) => props.theme.backgroundColor};
  border:  ${(props) => props.theme.border};
  font-size: 16px;
  color: black;
  list-style: none;
  margin: 16px 0 16px 0;
  border-radius: 4px;
  box-shadow: 0 1px #ffffff inset, 0 1px 1px rgb(34 25 25 / 40%);
`
const CardDescStyles = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.color};
`
const CardURLStyles = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.color};
`

const CardLinkStyles = styled.a`
  font-size: 21px;
  color: ${(props) => props.theme.color};
  text-decoration: none;
`

export default function Card(props) {
    return (
        <CardStyles data-test="component_card" className={"card"}>
            <CardURLStyles className={"card_url"}> {props.repo.url} </CardURLStyles>
            <div className={"card_name"}> <CardLinkStyles className={"card_link"} href={props.repo.url}>{props.repo.name} </CardLinkStyles></div>
            <CardDescStyles className={"card_desc"}> {props.repo.description} </CardDescStyles>
        </CardStyles>
    )
}
