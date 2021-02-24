import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Loading from "../Loading/Loading"

Enzyme.configure({ adapter: new Adapter() })

describe("Loadings test suite", () => {
    it("renders without errors", () => {
        const wrapper = shallow(<Loading />)
        const loadingComponent = wrapper.find('[data-test="component_loading"]')
        console.log('TTTEESSTTTIINNGG!!!)', loadingComponent)
        expect(loadingComponent.hasClass('Loading_wrapper')).toEqual(true)
    })

    it("renders loading text", () => {
        const wrapper = shallow(<Loading />)
        const loadingComponent = wrapper.find('[data-test="loading_text"]')
        expect(loadingComponent.text()).toEqual("Loading...")
    })
})
