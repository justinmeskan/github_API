import React, { useState } from 'react'
import Mag from '../SVG/MagnifyigGlass'
import Remove from '../SVG/Remove'
import { useDispatch } from "../Hooks/Hooks"
import { SEARCH_TERM } from "../../store/reducers/app/appAction"
import styled from 'styled-components'

const SearchStyles = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  display: flex;
  width: 40%;
  margin: 0 0 0 25% !important;
  justify-content: center;
`
const Button1Styles = styled.button`
  padding: 0 2px 0 2px;
  border-radius: 10px 0 0 10px;
`
const Button2Styles = styled.button`
  padding: 0 2px 0 2px;
  border-radius: 0 10px 10px 0;
`
const SearchFieldStyles = styled.input`
  border: ${(props) => props.theme.border};
  background: ${(props) => props.theme.backgroundColor};

`


export default function Search() {
    const [searchField, setSearchField] = useState("")
    const dispatch = useDispatch()
    return (
        <SearchStyles data-test="component_search" className="input-group mb-3" id={"input_modified"}>
            <Button1Styles
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                onClick={(e) => {
                    dispatch({ type: SEARCH_TERM, payload: searchField })
                    setSearchField("")
                }}
            >
                <Mag />
            </Button1Styles>
            <SearchFieldStyles
                type="text"
                className="form-control"
                placeholder="Type a Github user's name."
                aria-label="This is a search field"
                onChange={(e) => setSearchField(e.target.value)}
                value={searchField}
                id={"search_field"}
            />
            <Button2Styles
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={(e) => {
                    setSearchField("")
                }}
            >
                <Remove />
            </Button2Styles>
        </SearchStyles>
    )
}