import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('Should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'This is my filter' })
    expect(state.text).toBe('This is my filter')
})

test('Should set startDate filter', () => {
    const startDate = moment()
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate })
    expect(state.startDate).toEqual(startDate)
})

test('Should set endDate filter', () => {
    const endDate = moment()
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate })
    expect(state.endDate).toEqual(endDate)
})