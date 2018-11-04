import React from 'react'
import ReactTable from "react-table"
import numeral from 'numeral'
import moment from 'moment'

import { createArrayOfLength } from '../../utils/helpers/arrays'

class AmortizationTable extends React.Component {
  constructor(props) {
    super(props)

    this.makeData = this.makeData.bind(this)
  }

  makeData() {
    const { term, paymentsPerYear, principal, firstPaymentDate, interestRate, payment } = this.props.fieldInputs  
    // if (!fieldInputs.term || !fieldInputs.paymentsPerYear) return []
    const totalRows = parseFloat(term) * parseFloat(paymentsPerYear) + 2

    const firstRowData = {
      balance: principal && numeral(principal).format('$ 0,0.00'),
      date: moment(firstPaymentDate).format('MMM Do, YYYY'), 
      period: 0,
    }

    const lastRowData = (period) => ({
      period,
      adjustment: 'LAST!'
    })

    const middleRowData = (priorRowData, period) => {
      const { balance: priorBalance } = priorRowData
      // const date = moment(priorDate).add(1, 'M')
      // console.log(priorDate)
      // console.log(moment(firstPaymentDate).add(period, 'M').format('MMM Do, YYYY'))
      // console.log(typeof moment(priorDate))
      const date = moment(firstPaymentDate).add(period, 'M').format('MMM Do, YYYY')
      const interest = (numeral(interestRate)._value * numeral(priorBalance)._value)
      const principal = payment - interest
      const balance = numeral(priorBalance)._value - principal

      return {
        period,
        date,
        interest: numeral(interest).format('$ 0,0.00'),
        payment: numeral(payment).format('$ 0,0.00'),
        principal: numeral(principal).format('$ 0,0.00'), 
        balance: numeral(balance).format('$ 0,0.00'),
      }
    }

    const data = createArrayOfLength(totalRows).reduce((agg, period) => {
      if (period === 0) {
        agg.push(firstRowData)
      } else if (period === totalRows - 1) {
        agg.push(lastRowData(period))
      } else {
        agg.push(middleRowData(agg[period - 1], period))
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
              // Footer: null,
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
