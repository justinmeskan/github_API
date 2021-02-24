import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App'
import { findTestBys, option } from '../../util/test_utilities'

Enzyme.configure({ adapter: new Adapter() })


test("renders without errors", () => {
    const wrapper = mount(<ReduxProvider reduxStore={store} children={<App />} />, options)
    console.log('wrapper', findTestByAttr(wrapper, 'App_wrapper'))
    // expect(findTestByAttr(wrapper, 'component-app')).toBe(true)
})

test("renders without errors", () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find('[data-test="component-app"]')
  // expect(appComponent.hasClass('App_wrapper')).toEqual(true)
})