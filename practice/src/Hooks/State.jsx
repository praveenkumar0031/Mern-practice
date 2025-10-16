import React, { useState } from 'react'
import './state.css';
function State() {
    
    const [like,SetLike]=useState(0);
  return (
    <div className="counter-container">
      <h2>Likes Count:{like}</h2>
<button onClick={()=>SetLike(like+1)}>+</button>
<button onClick={()=>SetLike(like-1)}>-</button>
<button onClick={()=>SetLike(0)}>reset</button>
    </div>
  )
}

export default State