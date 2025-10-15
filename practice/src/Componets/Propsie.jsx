import React from "react";
//Array as props
function Propsie({ skill }) {
  return (
    <ol>
      {skill.map((sk)=>(<li>{sk}</li>))}
    </ol>
  );
}

export default Propsie;
