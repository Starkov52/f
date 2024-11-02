import React ,{useContext} from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import imgProfile from '../icons/free-icon-user-847969.png'
import imgTodayTask from '../icons/free-icon-only-today-6895248.png'
import imgListOfTasks from '../icons/free-icon-to-do-list-4451823.png'
import imgStatistics from '../icons/free-icon-statistics-786746.png'
import imgMainPage from '../icons/free-icon-home-1946488.png'
import imgSettings from '../icons/free-icon-settings-900797.png'
import imgAcess from '../icons/free-icon-done-1042010.png'
import {UserData} from '../App'
function AsideComponent(props, ref) {
    const {userInfo, setUserInfo} = useContext(UserData)
    return (
        
        <div className="aside" ref={ref} style={{fontSize: `${props.fontSize}px`}}>
            <Link to='/profileSection' className="aside__itemProfile">
                <img  className="aside__profileIcon" src={imgProfile}></img>
                <p className="aside__userName">{userInfo.name}</p>
            </Link>
            <Link to="doneTasks" className="aside__item">
                <img  className="aside__listOfAcessTaskIcon" src={imgAcess}></img>
                <p className="aside__listOfAcessTaskTitle">Выполненные задачи</p>
            </Link>
            <Link to="/listTasksSection "className="aside__item">
                <img  className="aside__listOfTaskIcon" src={imgListOfTasks}></img>
                <p className="aside__listOfTaskTitle">Список задач</p>
            </Link>
            <Link to="/statistics" className="aside__item">
                <img  className="aside__statisticsInfoIcon" src={imgStatistics}></img>
                <p className="aside__statisticsInfoTitle">Статистика продуктивности</p>
            </Link>
            <Link to="/homeSection" className="aside__item">
                <img  className="aside__mainPageIcon" src={imgMainPage}></img>
                <p className="aside__mainPageTitle">Главная страница</p>
            </Link>
            <Link to="/settingSection" className="aside__settings"><img className="aside__settings" src={imgSettings}></img></Link>
   
        </div>
  
    )
}
const Aside = React.forwardRef(AsideComponent)
export default Aside 