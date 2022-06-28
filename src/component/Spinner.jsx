import "./Spinner.css"
import React from 'react'
function Spinner() {
  return (
    <div className="parent">
        <h2>DATA_LOADING....</h2>
        <div className='spinner'></div>
    </div>
  )
}

export default Spinner