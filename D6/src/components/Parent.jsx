import React, { useState } from 'react'
import Child from "./Child"

export default function Parent() {
  const [count, setCount] = useState(0);
  const increment = () => {setCount(count + 1)};
  return (
    <div>
      <h1>This is Parent Component</h1>
      <h1>Count: {count}</h1>
      <Child btn = {increment} />
    </div>
  )
}
