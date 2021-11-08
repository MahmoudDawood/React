import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

// test('Should view one expense', () => {
//     const res = ExpensesSummary([expenses[0]])
//     expect(res).toEqual(`Viewing 1 expense totalling $1.95`)
// })
// test('Should view three expenses', () => {
//     const res = ExpensesSummary(expenses)
//     expect(res).toEqual(`Viewing 3 expenses totalling $1,141.95`)
// })

test('Should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={26452453483} />)
    expect(wrapper).toMatchSnapshot()
})