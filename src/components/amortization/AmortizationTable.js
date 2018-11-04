import React from 'react'
import ReactTable from "react-table"
import numeral from 'numeral'
// import moment from 'moment'

import { createArrayOfLength } from '../../utils/helpers/arrays'

class AmortizationTable extends React.Component {
  constructor(props) {
    super(props)

    this.makeData = this.makeData.bind(this)
  }

  makeData() {
    const { fieldInputs } = this.props  
    // if (!fieldInputs.term || !fieldInputs.paymentsPerYear) return []
    const totalRows = parseFloat(fieldInputs.term) * parseFloat(fieldInputs.paymentsPerYear) + 2

    const firstRowData = {
      period: 0,
      balance: fieldInputs.principal && numeral(fieldInputs.principal).format('$0,0.00') 
    }

    const lastRowData = (period) => ({
      period,
      adjustment: 'LAST!'
    })

    const middleRowData = (period) => ({
      period,
      adjustment: 'sup'
    })
    console.log('totalRows: ', totalRows)
    const data = createArrayOfLength(totalRows).reduce((agg, period) => {
      console.log(period)
      if (period === 0) {
        agg.push(firstRowData)
      } else if (period === totalRows - 1) {
        agg.push(lastRowData(period))
      } else {
        agg.push(middleRowData(period))
      }
      return agg
    }, [])
    // console.log(data)
    
    // return ['sup']
    return data
  }

  render() {
    // this.makeData()
    return (
      <div>
        <ReactTable
          data={this.makeData()}
          noDataText='Please enter the information above'
          sortable={false}
          columns={[
            
            {
              Header: 'Amortization Table',
              Footer: null,
              columns: [
                {
                  Header: "Period",
                  accessor: "period"
                },
                {
                  Header: "Date",
                  accessor: "date",
                },
                {
                  Header: "Payment",
                  accessor: "payment",
                },
                {
                  Header: "Interest",
                  accessor: "interest",
                },
                {
                  Header: "Principal",
                  accessor: "principal",
                },
                {
                  Header: "Balance",
                  accessor: "balance",
                },                 
                {
                  Header: "Adjustment",
                  accessor: "adjustment",
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
}

export default AmortizationTable
