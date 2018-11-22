import React from 'react'

const AmortizationTableInput = (props) => {
  const { fieldInputs } = props

  return (
    <div>
      <label>Principal</label>
      <input
        name='principal'
        onChange={props.onInputChange}
        placeholder='original principal'
        value={fieldInputs.principal}
      />
      <br />
      <label>Loan Term (years)</label>
      <input
        name='term'
        onChange={props.onInputChange} type='text'
        placeholder='loan term'
        value={fieldInputs.term}
      />
      <br />
      <label>Annual Interest Rate</label>
      <input
        name='interestRate'
        onChange={props.onInputChange} type='text'
        placeholder='interest rate'
        value={fieldInputs.interestRate}
      />
      <br />
      <label>Payments per year</label>
      <input
        name='paymentsPerYear'
        onChange={props.onInputChange} type='text'
        placeholder='payments per year'
        value={fieldInputs.paymentsPerYear}
      />
      <br />
      <label>Annual Interest Rate</label>
      <input
        name='Start Date'
        onChange={props.onInputChange} type='text'
        placeholder='date of first pmt'
        value={fieldInputs.firstPaymentDate}
      />
      <br />
      <label>Payment</label>
      <input
        name='payment'
        onChange={props.onInputChange} type='text'
        placeholder='payment (OPTIONAL)'
        value={fieldInputs.payment}
      />
    </div>
  )
}


export default AmortizationTableInput
