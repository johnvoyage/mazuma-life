const getVisibleTransactions = (transactions, { text, sortBy, startDate, endDate }) => {
  return transactions.filter((transaction) => {
    const startDateMatch = typeof startDate !== 'number' || transaction.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || transaction.createdAt <= startDate
    const textMatch = transaction.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}

export default getVisibleTransactions