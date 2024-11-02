import {React, useState} from 'react'
import timeImg from '../icons/free-icon-clock-icon-11261335.png'
function TimeComponent({time, setTime}) {
   
    function updateTime() {
        setInterval(() => {
            setTime(new Date().toString().slice(16, 25))
        }, 1000);
    }
    updateTime()
    return(
        <div className="timeNow">
            <img className="timeNow__img" src={timeImg}></img>
            <p className="timeNow__value">{time}</p>
        </div>
    )
}
export default TimeComponent