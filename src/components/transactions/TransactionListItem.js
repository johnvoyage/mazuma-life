import React from 'react'
import { Link } from 'react-router-dom'


const TransactionListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>

  </div>
)

export default TransactionListItem