import React from 'react'
import ReactTable from "react-table"
import { connect } from 'react-redux'

const AccountsTable = (props) => {
  const { accounts } = props

  const data = accounts.map(account => ({
    // category: account.category,
    // description: account.description,
    // name: account.name,
  }))

  return (
    <div>
      <ReactTable
        data={data}
        columns={[
          {
            Header: "Entries",
            columns: [
              {
                Header: "Name",
                accessor: "name"
              }, {
                Header: "Description",
                accessor: "description",
                // accessor: d => d.lastName
              }, {
                Header: 'Accounts',
                accessor: 'accounts',
              }, {
                Header: 'Debits',
                accessor: 'debits',
              }, {
                Header: 'Credits',
                accessor: 'credits',
              }
            ]
          },
          // {
          //   Header: "Info",
          //   columns: [
          //     {
          //       Header: "Age",
          //       accessor: "age",
          //       aggregate: vals => _.round(_.mean(vals)),
          //       Aggregated: row => {
          //         return (
          //           <span>
          //             {row.value} (avg)
          //           </span>
          //         );
          //       }
          //     },
          //     {
          //       Header: "Visits",
          //       accessor: "visits",
          //       aggregate: vals => _.sum(vals)
          //     }
          //   ]
          // }
        ]}
        pivotBy={["name"]}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  accounts: state.entries
  // startAddAccount: (account) => dispatch(startAddAccount(account))
})

export default connect(mapStateToProps, undefined)(AccountsTable)
