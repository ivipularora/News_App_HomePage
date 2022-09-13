import React from 'react'

function Navbar({title}) {
  return (
    <div style={{textDecoration: "none"}}>
    <a href= {"#"+ title} style={{textDecoration: "none"}}>
        <p style={{textDecoration: "none"}}>{title}</p>
    </a>
    </div>
  )
}

export default Navbar