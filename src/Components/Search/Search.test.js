import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Search from "../Search/Search"
import { init } from '../../util/test_utilities'

Enzyme.configure({ adapter: new Adapter() })

describe("Searchs test suite", () => {
    it("renders without errors", () => {
        const wrapper = shallow(<Search repo={init.app.user.repositories.nodes[0]}/>)
        const searchComponent = wrapper.find('[data-test="component_search"]')
        expect(searchComponent.hasClass('input-group')).toEqual(true)
    })
})
