import React, {useEffect, useContext, useState, useRef} from 'react'
import {UserData} from '../App'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {User} from '../App'
import {useWeekState} from '../hooks/statisticHook'
function StatisticsComponent({tasks, doneTasks}) {
   const weekArray = useWeekState(tasks, doneTasks)
   const tableRef = useRef(null)
   const [height, setHeight] = useState('')
   useEffect(() => {
    if(tableRef.current) {
    const height = tableRef.current.offsetHeight  
    setHeight(height)
    console.log(height)
    }
   },[])
    return (
    <div className='statistics'>
<div className="statistics__inner">
    <h1 className='statistics__title'>Статистика выполненных заданий</h1>
    <div className='statistics__days'>
        <p className='statistics__day'>Воскресенье</p>
            <p className='statistics__day'>Суббота</p>
            <p className='statistics__day'>Пятница</p>
            <p className='statistics__day'>Четверг</p>
            <p className='statistics__day'>Среда</p>
            <p className='statistics__day'>Вторник</p>
            <p className='statistics__day'>Понедельник</p>
        </div>
    <div ref={tableRef}className='statistics__table'>
        
        <div className='statistics__numberAside'>
            <p className='statistics__number'>10</p>
            <p className='statistics__number'>9</p>
            <p className='statistics__number'>8</p>
            <p className='statistics__number'>7</p>
            <p className='statistics__number'>6</p>
            <p className='statistics__number'>5</p>
            <p className='statistics__number'>4</p>
            <p className='statistics__number'>3</p>
            <p className='statistics__number'>2</p>
            <p className='statistics__number'>1</p>
            <p className='statistics__number'>0</p>
        </div>
       
        <TransitionGroup className='statistics__columnPart'>
            
         {
         weekArray && weekArray.map((item, index) => {
           
     
            if(index < 7)  {
                return (
                    <CSSTransition
                    timeout={300}
                    classNames="tableItem"
                    >
 <div style={{
    height: `${item.done * height / 10}px`


}}className='statistics__column'>{item.done}<p className='statistics__date'>задачи</p></div> 
</CSSTransition>
                )
            }
         })
        
        
           
         }
</TransitionGroup>
        </div>
    </div>

    </div>
    )
}
export default StatisticsComponent