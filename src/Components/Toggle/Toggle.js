import React, { useRef } from 'react'
import { SET_THEME } from '../../store/reducers/app/appAction'
import { useDispatch, useSelector } from '../Hooks/Hooks'
import styled from 'styled-components'

const LabelStyles = styled.label`
  color: ${(props) => props.theme.color};
`

export default function Toggle() {
    const dispatch = useDispatch()
    const switchRef = useRef(null)
    const theme = useSelector( state => state.app.theme)
    return (
        <div data-test={"component_toggle"} className="form-check form-switch" id={"toggle_wrapper"}>
            <input
                onChange={(e) => {
                    dispatch({type: SET_THEME, payload: !theme})
                }}
                ref={switchRef}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
            />
                <LabelStyles
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                >
                Dark Theme
                </LabelStyles>
        </div>
    )
}

