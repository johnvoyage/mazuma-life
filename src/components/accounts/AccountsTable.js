import React from 'react'
import ReactTable from "react-table"
import { connect } from 'react-redux'

const AccountsTable = (props) => {
  const { accounts } = props

  const data = accounts.map(account => ({
      category: account.category,
      description: account.description,
      name: account.name,
    }))

  return (
    <div>
      <ReactTable
      data={data}
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
              accessor: "category",
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
}

const mapStateToProps = (state) => ({
  accounts: state.accounts
  // startAddAccount: (account) => dispatch(startAddAccount(account))
})

export default connect(mapStateToProps, undefined)(AccountsTable)
