import React from 'react'

function HeroCard({title, bgImg}) {
  return (
    <div style={{backgroundImage:  `url(${bgImg})`, height:"20rem", width: "35rem", backgroundSize: "contain", display: "flex", flexDirection: "column", justifyContent: "flex-end"}} >
        <h4 style={{ color: "white"  }}>{title}</h4>
    </div>
  )
}

export default HeroCard