import React from 'react'

export default function Child({btn}) {
  return (
    <div>
      <h1>This is Child Component</h1>
      <button onClick = {btn}>Increment Parent</button>
    </div>
  )
}
