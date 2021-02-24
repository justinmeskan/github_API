import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Card from "../Card/Card"
import { init } from '../../util/test_utilities'

Enzyme.configure({ adapter: new Adapter() })

describe("Cards test suite", () => {
    it("renders without errors", () => {
        const wrapper = shallow(<Card repo={init.app.user.repositories.nodes[0]}/>)
        const cardComponent = wrapper.find('[data-test="component_card"]')
        expect(cardComponent.hasClass('card')).toEqual(true)
    })
})
