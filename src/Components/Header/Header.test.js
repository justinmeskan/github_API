import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Header from "../Header/Header"
import { init } from '../../util/test_utilities'

Enzyme.configure({ adapter: new Adapter() })

describe("Headers test suite", () => {
    it("renders without errors", () => {
        const wrapper = shallow(<Header repo={init.app.user.repositories.nodes[0]}/>)
        const headerComponent = wrapper.find('[data-test="component_header"]')
        expect(headerComponent.hasClass('header-wrapper')).toEqual(true)
    })
})
