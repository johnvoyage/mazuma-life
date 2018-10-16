import React from 'react'

import EntriesFilters from './EntriesFilters'
import EntriesTable from './EntriesTable'


const EntriesDashboardPage = () => (
  <div>
    Entries DB
    <EntriesFilters />
    <EntriesTable />
  </div>
)

export default EntriesDashboardPage