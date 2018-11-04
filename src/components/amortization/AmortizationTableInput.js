import React from 'react'

const AmortizationTableInput = (props) => {
  const { fieldInputs } = props

  return (
    <div>
      <input 
        name='principal'
        onChange={props.onInputChange} 
        placeholder='original principal'
        value={fieldInputs.principal}
      />
      <br />
      <input 
        name='term'
        onChange={props.onInputChange} type='text'
        placeholder='loan term'
        value={fieldInputs.term}
      />
      <br />
      <input 
        name='interestRate'
        onChange={props.onInputChange} type='text' 
        placeholder='interest rate'
        value={fieldInputs.interestRate}
      />
      <br />
      <input 
        name='paymentsPerYear'
        onChange={props.onInputChange} type='text' 
        placeholder='payments per year'
        value={fieldInputs.paymentsPerYear}
      />
      <br />
      <input 
        name='firstPaymentDate'
        onChange={props.onInputChange} type='text'
        placeholder='date of first pmt'
        value={fieldInputs.firstPaymentDate}
      />
    </div>
  )
}


export default AmortizationTableInput