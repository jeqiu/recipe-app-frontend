import React from 'react'

const Header = ({title}) => {
  const headerStyle = {
    color: 'blue',
    fontStyle: 'bold',
    fontSize: 16
  }

  return (
    <div style={headerStyle}>
      <h1>{title}</h1>
    </div>
  )
}

export default Header