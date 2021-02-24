import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Footer from "../Footer/Footer"

Enzyme.configure({ adapter: new Adapter() })

describe("Footers test suite", () => {
    it("renders without errors", () => {
        const wrapper = shallow(<Footer />)
        const footerComponent = wrapper.find('[data-test="component_footer"]')
        expect(footerComponent.hasClass('Footer_wrapper')).toEqual(true)
    })
})
