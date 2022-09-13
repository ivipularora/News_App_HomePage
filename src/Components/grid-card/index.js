import React from 'react'

function GridCard({title, img}) {
  return (
    <div style={{textOverflow: "----", width: "15rem" }}>
        <img src={img} style={{width: "15rem"}} alt= "Image" />
        <p> {title}</p>
    </div>
  )
}

export default GridCard