import React from 'react'
import plus from '../icons/icons8-добавить-50.png'
function CreateTask({tasks, setTasks, setVisible}) {
    const addTask = () => {
        
        
setVisible('active')
    }
    return (
        <li className="main__createTask">
<img src={plus} className="main_createTaskImg" onClick={addTask}></img>
<p className="main__createTaskText">Поставить новую задачу</p>
        </li>
    )
}
export default CreateTask