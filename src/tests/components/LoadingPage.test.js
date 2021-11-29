import React from 'react'
import LoadingPage from "../../components/LoadingPage"
import { shallow } from 'enzyme'

test('Should correctly render LoadingPage', () => {
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})