import React from 'react'
import numeral from 'numeral'

import AmortizationTable from './AmortizationTable';
import AmortizationTableInput from './AmortizationTableInput'

class AmortizationTableContainer extends React.Component {
  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)

    this.state = {
      principal: '',
      term: 2,
      interestRate: '',
      paymentsPerYear: 3,
      firstPaymentDate: '',
    }
  }

  onInputChange(event) {
    // console.log(event.target.name)
    const inputField = event.target.name
    const inputValue = event.target.value
    this.setState(() => ({ 
      [inputField]: inputValue
    })) 
  }

  render() {
    return (
      <div>
        <AmortizationTableInput 
          fieldInputs={this.state} 
          onInputChange={this.onInputChange}
        />
        <AmortizationTable 
          fieldInputs={this.state}
        />
      </div>
    )
  }
}

export default AmortizationTableContainer