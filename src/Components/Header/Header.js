import React from 'react'
import Search from '../Search/Search'
import Toggle from '../Toggle/Toggle'

export default function Header() {
    return (
        <header data-test="component_header" className="header-wrapper">
            <Toggle />
            <Search />
        </header>
    )
}
