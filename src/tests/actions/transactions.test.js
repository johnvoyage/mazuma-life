import { addTransaction, editTransaction, removeTransaction } from '../../actions/transactions'

test('should setup remove transaction action object', () => {
  const action = removeTransaction({ id: '123abc' })
  
  expect(action).toEqual({
    type: 'REMOVE_TRANSACTION',
    id: '123abc',
  })
})