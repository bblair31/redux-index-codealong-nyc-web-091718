import React from 'react'

const Input = (props) => {
  return <input type="text" onChange={props.onInputChange} value={props.currentInput}/>
}





export default Input
