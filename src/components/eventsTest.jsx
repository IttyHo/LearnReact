import React from 'react'

export default function EventsTest() {

  const onBtnClick = () => {
    alert("click")
  }

  return (
    <div className='container'>
      <h2>Events test</h2>
      <button onClick={onBtnClick}>click 1</button>
      <button onClick={() => {
        alert("click 2")
      }}>click 2</button>
    </div>
  )
}
