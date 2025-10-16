import React from 'react'
import './style.css';
import { useState } from 'react';
function Like() {
    const [like,SetLike]=useState(0);
  return (
    <div className="like-container">
      <h2>Likes {like}</h2>
    <button onClick={()=>SetLike(like+1)}>♡</button>
    <button onClick={()=>SetLike(like-1)}>♥︎</button>
    </div>
  )
}

export default Like