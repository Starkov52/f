import {React, useState, useRef, useContext} from 'react'
import btn from '../icons/free-icon-pin-889647.png'
import {UserData} from '../App'
import {User} from '../App'
function TaskModal({tasks, setTasks, visible, setVisible}) {
    const {userInfo, setUserInfo} = useContext(UserData)
    const inputTitle = useRef()
    const inputDescription = useRef()
    const dateSelect = useRef()
    const setSrokTask = () => {
        const notebookColors = [
            '#FFEBEE', // Light Red
            '#FFF3E0', // Light Orange
            '#FFFDE7', // Light Yellow
            '#E8F5E9', // Light Green
            '#E3F2FD', // Light Blue
            '#F3E5F5', // Light Purple
            '#FBE9E7', // Peach
            '#ECEFF1', // Light Gray
            '#FFCDD2', // Soft Pink
            '#D7CCC8'  // Light Brown
          ];
          const randomColor = () => {
            return Math.floor(Math.random() * 10)
          }
          return notebookColors[randomColor()]
    }   
    const newTask = (event) => {
        event.preventDefault()
        setTasks([...tasks,
            {
            title: inputTitle.current?.value,
            date: new Date().toString().slice(0, 15),
            description: inputDescription.current?.value,
            state: false,
            srok: dateSelect.current?.value,
            color: `${setSrokTask()}`
            }
        ]
        )
        inputTitle.current.value = '';
        inputDescription.current.value = '';
        dateSelect.current.selectedIndex = 0;
        console.log(...tasks)
        setVisible('')
        setUserInfo(new User(userInfo.name, userInfo.password, userInfo.quantityDoneTasks, userInfo.quantityNotDoneTasks += 1, userInfo.quantityAllTasks += 1, userInfo.doneProcent, userInfo.isRegistration, userInfo.tasks, userInfo.doneTasks, userInfo.resourcesReady, userInfo.id, userInfo.weekInfo))
    }

    return (
        <div className={`taskModal ${visible}`}>
        <h1 className="taskModal__title">Создание задачи</h1>
        <p className="taskModal__titleText">Придумайте заголовок задачи</p>
        <input ref={inputTitle} type='text' className="taskModal__inputTitle" placeholder="Введите заголовок"></input>
        <p className="taskModal__dateText">Укажите срок выполнения задачи</p>
        <select  ref={dateSelect} className="taskModal__dateSelect">
            <option value={1} className="taskModal__option">1 день</option>
            <option value={2} className="taskModal__option">2 дня</option>
            <option value={3} className="taskModal__option">3 дня</option>
            <option value={5} className="taskModal__option">5 дней</option>
            <option value={10} className="taskModal__option">10 дней</option>
        </select>
        <p className="taskModal__descriptionTitle">Опишите суть задачи</p>
        <textarea ref={inputDescription}type='textarea' className="taskModal__description"></textarea>
        <img src={btn} className="taskModal__btn"></img>
        <div className="taskModal__btns">
        <button onClick={() => {setVisible('')}} className='taskModal__addBtn'>Отмена</button>
        <button onClick={newTask} className='taskModal__addBtn'>Создать</button>
        </div>
        </div>
    )
}
export default TaskModal