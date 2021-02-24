import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Remove from './Remove'
import MagnifyingGlass from './MagnifyigGlass'

Enzyme.configure({ adapter: new Adapter() })

describe("SVG test suite", () => {
    it("renders MagnifyingGlass without errors", () => {
        const wrapper = shallow(<MagnifyingGlass />)
        const magnifyingGlassComponent = wrapper.find('[data-test="component_magnifying_glass"]')
        expect(magnifyingGlassComponent.hasClass('bi-search')).toEqual(true)
    })

    it("renders Remove without errors", () => {
        const wrapper = shallow(<Remove />)
        const removeComponent = wrapper.find('[data-test="component_remove"]')
        expect(removeComponent.hasClass('bi-x-circle')).toEqual(true)
    })
})
