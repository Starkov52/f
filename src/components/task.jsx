import {React, useState, useContext, useEffect} from 'react' 
import {UserData} from '../App'
import {User} from '../App'
import {TimeData} from '../App'
function TaskItem({title, date, description, state, srok, color, tasks, addDoneTask, doneTasks, addDoneTasks}) {
    const {userInfo, setUserInfo} = useContext(UserData)
    const [term, setTerm] = useState({
        days: '',
        hours: '',
        minutes: '',
        second: ''
    })
    const {time, setTime} = useContext(TimeData)
 
    
    const removeTask = () => {
        addDoneTask(description)
        addDoneTasks([...doneTasks, 
            {
            title: title,
            description: description,
            date: date,
            state: state,
            srok: srok,
            finishTaskTime: new Date()
            }
        ])
        const weekObject = userInfo.weekInfo
        const key = new Date().getDay()
        weekObject[key].done += 1
      
        new User(userInfo.name, userInfo.password, userInfo.quantityDoneTasks += 1, userInfo.quantityNotDoneTasks -= 1, userInfo.quantityAllTasks, userInfo.doneProcent, userInfo.isRegistration, userInfo.tasks, userInfo.doneTasks, userInfo.resourcesReady, userInfo.id, userInfo.weekInfo)
    }
    useEffect(() => {
        function calculateTerm  (date, srok)  {
            
                const dateTask = new Date(date)
              
                const remainingTerm = new Date(dateTask.getTime() + srok * 1000 * 60 * 60 * 24)
                const result = remainingTerm - new Date()
                const days = result / (1000 * 60 * 60 * 24)
                const hours = result / (1000 * 60 * 60) % 24
                const minutes = result / (1000 * 60) % 60
                const second = result / 1000 % 60
                setTerm({
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    second: second,
                })
        
               }
               calculateTerm(date, srok)
               
               
    },[time])
    return (
        <li style={{backgroundColor: `${color}`}} className="main__item">
<h1 className="main__title">{title}</h1>
<p className='main__dateCreate'>Дата создания: {date}</p>
<p className="main__time">Осталось времени до выполнения задачи: {term.days.toString().slice(0, 3)} дн {term.hours.toString().slice(0, 2)} ч {term.minutes.toString().slice(0, 3)} мин {term.second.toString().slice(0, 2)} сек</p>
<p className="main__descriptionTask">{description}</p>
<button onClick={removeTask} className="main__taskBtn">Завершить задачу</button>
            </li>
    )
}
export default TaskItem