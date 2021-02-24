import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { FetchRepos } from './FetchRepos'
Enzyme.configure({ adapter: new Adapter() })

describe("Footers test suite", () => {
    it("renders without errors", () => {
        console.log('fetch repos', FetchRepos())
        // expect(footerComponent.hasClass('Footer_wrapper')).toEqual(true)
    })
})
