import React from 'react'

export default function CheckBox(props) {
  return (
    <button className={`btn btn-${props.color}`} onClick={() => (props.handleCheckBoxClick(props.idx))}>{props.idx}</button>
    // 

  )
}
