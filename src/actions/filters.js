const SET_TEXT_FILTER = 'SET_TEXT_FILTER'
const SORT_BY_DATE = 'SORT_BY_DATE'
const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT'
const SET_START_DATE = 'SET_START_DATE'
const SET_END_DATE = 'SET_END_DATE' 

export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  text,
})

export const sortByDate = () => ({
  type: SORT_BY_DATE,
})

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT,
})

export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  startDate,
})

export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  endDate,
})