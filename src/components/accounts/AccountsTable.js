import React from 'react'
import ReactTable from "react-table"

const AccountsTable = () => (
  <div>
    <ReactTable
      data={[]}
      columns={[
        
        {
          Header: 'Accounts',
          // Footer: null,
          columns: [
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Description",
              accessor: "description",
            },
            {
              Header: "Category(ies)",
              accessor: "categories",
            },
            {
              Header: "Transactions",
              accessor: "transactions",
            },
            {
              Header: "Balance",
              accessor: "balance",
            },
          ]
        },
      ]}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  </div>    
)

export default AccountsTable