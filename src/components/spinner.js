import React from 'react'
import loading from './Spinner-1s-200px.gif'
import News from './News'

function spinner() {
  return (
    <div className="text-center">
        <img src={loading} alt=" "/>
    </div>
  )
}

export default spinner