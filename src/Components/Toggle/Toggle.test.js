import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Toggle from "../Toggle/Toggle";

Enzyme.configure({ adapter: new Adapter() })
describe("Toggles test suite", () => {
    it("renders without errors", () => {
        const wrapper = shallow(<Toggle />)
        const toggleComponent = wrapper.find('[data-test="component_toggle"]')
        expect(toggleComponent.hasClass('component_toggle')).toEqual(true)
    })
})

