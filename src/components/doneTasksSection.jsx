import React,{useContext, useEffect} from 'react'
import TaskItem from './doneTasks'
import {UserData} from '../App'
function TaskSection({doneTasks, setDoneTasks}) {
    const {userInfo, setUserInfo} = useContext(UserData)
  function returnFinishTime(done, finishTaskTime) {
    const startDate = new Date(done)
    const finishDate = new Date(finishTaskTime)
const diffirience = finishDate -  startDate
const finishTimeDay = diffirience / 1000 / 60 / 60 / 24
return finishTimeDay
  }
    return (
        <div className='doneTasks'>
<div className="doneTasks__inner">
    { doneTasks && ( 
        doneTasks.map((item) => <TaskItem key={item.title} title={item.title} description={item.description} srok={item.srok} date={item.date} finish={returnFinishTime(item.date, item.finishTaskTime)}></TaskItem>))}
        {!doneTasks && (
            <p>У вас нету выполненных задач</p>
        )}
</div>
</div>
    )
}
export default TaskSection