import React from 'react'

export default function EventsTest(props) {

    const onBtnClick = () => {
        alert("click1")
    }

    return (
        <div>
            EventsTest
            <button onClick={onBtnClick}> click1 </button>
            <button> click2 </button>
        </div>
    )
}
