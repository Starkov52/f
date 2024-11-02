import React, {useRef, useEffect, useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import openImg  from '../icons/free-icon-open-11789065.png'
import profileImg from '../icons/free-icon-user-847969.png'
import {UserData} from '../App'
import AdviceComponent from './advice'
import productivityTips from '../advices'
import {User} from '../App'
function HomeSection() {
  
  const [newArray, setNewArray] = useState([])
  const {userInfo, setUserInfo} = useContext(UserData)
    const circle = useRef(null)
    function progressCircle(percent) {
        if(circle.current) {
        const radius = circle.current.r.baseVal.value
        const circleLength = 2 * Math.PI * radius
    
        circle.current.style.strokeDasharray = `${circleLength} ${circleLength}`
        circle.current.style.strokeDashoffset = circleLength
console.log("ПРЦОЕНТ: " + percent)
        const offset = circleLength - (percent / 100) * circleLength
        circle.current.style.strokeDashoffset = offset;
      
    }
}
function randomAdvices() {
  const array = []
  for(let i = 0; i < 3; i++) {
    const randomIndex =  Math.floor(Math.random() * 90)
   array.push(productivityTips[randomIndex])
   setNewArray(array)
}

}

    useEffect(() => {
      new Promise((resolve) => {
       const doneProcent = userInfo.calculateInfo(userInfo.quantityNotDoneTasks,userInfo.quantityDoneTasks)
       resolve(doneProcent)
      })
      .then((doneProcent) => {
      
     
        setUserInfo(new User(userInfo.name, userInfo.password, userInfo.quantityDoneTasks, userInfo.quantityNotDoneTasks, userInfo.quantityAllTasks, doneProcent, userInfo.isRegistration, userInfo.tasks, userInfo.doneTasks, userInfo.resourcesReady, userInfo.id, userInfo.weekInfo))
        return doneProcent
      }).then((doneProcent) => {
        progressCircle(doneProcent)
      })
       
     randomAdvices()
    },[])
    return (
        <div className="home">
  <div className="home__inner">
    <div className='home__windowsSection'>
    <Link to="/listTasksSection">
      <div className="home__listOfTasks">
        <img className="home__listOfTasksImg" src={openImg} alt="List of tasks" />
        <p className="home__text">Список существующих задач</p>
      </div>
    </Link>

    <Link to="/listTasksSection">
      <div className="home__createTask">
        <img className="home__listOfTasksImg" src={openImg} alt="Create new task" />
        <p className="home__text">Создать новую задачу</p>
      </div>
    </Link>

    <Link to="/doneTasks">
      <div className="home__doneTasks">
        <img className="home__listOfTasksImg" src={openImg} alt="Done tasks" />
        <p className="home__text">Посмотреть выполненные задачи</p>
      </div>
    </Link>
    </div>

  <div className="home__another">
<div className="home__circleInner">
    <svg className="home__circleProgress">
      <circle ref={circle} fill='transparent' cx='60' cy='60' r='52' className="home__circle"></circle>
    </svg>
    <p className='home__circleValue'>{`${userInfo.doneProcent === NaN || userInfo.doneProcent === undefined ? "не определено" : userInfo.doneProcent.toString().slice(0,4)}%`}</p>
  <h1 className='home__title'>Статистика выполненных задач</h1>
  <div className='home__userInfo'>
    <p className='home__userItem'>Выполненные задачи: {userInfo.quantityDoneTasks}шт</p>
    <p className='home__userItem'>Не выполненные задачи: {userInfo.quantityNotDoneTasks}шт</p>
    <p className='home__userItem'>Общее кол-во задач: {userInfo.quantityAllTasks}шт</p>
  </div>
  </div>
  <div className='advice'>
  {newArray.map((advice) => {
    
        return (
    <AdviceComponent title={advice.title} description={advice.description}></AdviceComponent>
        )
     
    
  })}
</div>
  </div>
  </div>
</div>

    )
}
export default HomeSection 