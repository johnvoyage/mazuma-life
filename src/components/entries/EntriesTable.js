import React from 'react'

import EntriesTableHeader from './EntriesTableHeader'
import EntriesTableBody from './EntriesTableBody'
import EntriesTableFooter from './EntriesTableFooter'



const EntriesTable = () => (
  <table>
    <EntriesTableHeader />
    <EntriesTableBody />
    <EntriesTableFooter />
  </table>
)

export default EntriesTable