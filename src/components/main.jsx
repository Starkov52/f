import {React, useState, Fragment, useEffect, useCallback, useContext} from 'react'
import TaskItem from './task'
import CreateTask from './createTask'
import TaskModal from './createTaskModal'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import SearchComponent from './searchTasks'
import {UserData} from '../App'

function Main({doneTasks, setDoneTasks, tasks, setTasks}) {
   const [isFilter, setIsFilter] = useState(false)

    const [filterTasks, setFilterTasks] = useState([])
const {userInfo, setUserInfo} = useContext(UserData)

const handleChangeFilterTasks = useCallback((filtered) => {
    setFilterTasks(filtered)
    setIsFilter(filterTasks.length > 0)
})


    const addDoneTask = (description) => {
        const updatedTasks = tasks.filter((task) => description !== task.description )
        setTasks(updatedTasks)
       
       }

    

    const [taskModalVisible, setTaskModalDisabled] = useState('')
   
    return (
        <Fragment>
           
             <SearchComponent filterTasks={filterTasks} handleChangeFilterTasks={handleChangeFilterTasks} tasks={tasks}></SearchComponent>
             <div className="main">
       <ul >
        <TransitionGroup className="main__inner">
{(isFilter ? filterTasks : tasks).map((item) => 
           
                
                <CSSTransition 
                key={item.title}
                timeout={300}
                classNames="item"
                    >
                     
                <TaskItem addDoneTasks={setDoneTasks} doneTasks={doneTasks} addDoneTask={addDoneTask} key={item.title}title={item.title} date={item.date} description={item.description} state={item.state} srok={item.srok} color={item.color}></TaskItem>
              
                </CSSTransition>
            
)}
    
            <CreateTask tasks={tasks} setVisible={setTaskModalDisabled} setTasks={setTasks}></CreateTask>


            </TransitionGroup>
        </ul>
        </div>
      
      <TaskModal visible={taskModalVisible} setVisible={setTaskModalDisabled} tasks={tasks} setTasks={setTasks}></TaskModal>
      </Fragment>
    )
}
export default Main