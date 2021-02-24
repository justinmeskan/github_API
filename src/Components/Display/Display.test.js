import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Display from '../Display/Display'
import { render } from '@testing-library/react'
import * as hooks from '../Hooks/Hooks'
import configureStore from 'redux-mock-store'
import { init } from '../../util/test_utilities'

import thunk from 'redux-thunk'
Enzyme.configure({ adapter: new Adapter() })


describe("Displays test suite", () => {
    let store

    beforeEach(() => {
        /* mocking store */
        store = configureStore([thunk])(init)

        /* mocking useSelector on our mock store */
        jest
            .spyOn(hooks, "useSelector")
            .mockImplementation(state => store.getState().app.user.repositories)

    })

    it("renders without errors and checks for a className", () => {
        const wrapper = shallow(<Display/>)
        const displayComponent = wrapper.find('[data-test="component_display"]')
        expect(displayComponent.hasClass('Display_wrapper')).toEqual(true)
    })

    it("renders Display child", () => {
        const wrapper = shallow(<Display/>)
        const displayComponent = wrapper.children('[data-test="component_display_ul"]')
        expect(displayComponent.hasClass('Display_ul')).toEqual(true)

    })
})
