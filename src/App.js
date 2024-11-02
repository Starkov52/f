import logo from './logo.svg';
import './css/styles.css';
import Aside from './components/aside'
import Main from './components/main'
import DoneTasks from './components/doneTasksSection'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import  React ,{useState, useEffect, createContext,useRef} from 'react'
import ProfileSection from './components/profileSection';
import TimeComponent from './components/timeNow'
import SettingComponent from './components/settingsComponent';
import HomeSection from './components/homeSection'
import RegistrationWindow from './components/registration'
import Autorization from './components/autorization'
import StatisticsComponent from './components/statistics';
import faviconImg from './icons/free-icon-pie-chart-3650590.png'
export const UserData = createContext(null)
export const TimeData = createContext(null)
export class User {
  constructor(name,password, quantityDoneTasks, quantityNotDoneTasks, quantityAllTasks, doneProcent, isRegistration, allTasks, doneTasks, resourcesReady, id, weekInfo) {
    this.name = name;
    this.quantityDoneTasks = quantityDoneTasks;
    this.quantityNotDoneTasks = quantityNotDoneTasks;
    this.quantityAllTasks = quantityAllTasks;
    this.doneProcent = doneProcent
    this.isRegistration = isRegistration
    this.password = password
    this.allTasks = allTasks
    this.doneTasks = doneTasks
    this.resourcesReady = resourcesReady
    this.id = id
    this.weekInfo = weekInfo
  }
  
 sendData(url, method, body) {
  return fetch(url,{
 method: method,
 headers: {
 'Content-Type': 'application/json',
 'Accept': 'application/json'
 },
  body: JSON.stringify(body)
  }).then((response) => {
    if(response.ok) {
      const data =  response.json()

      return data
    } else {
       throw new Error("ОШИБКА С БАЗОЙ ДАННЫХ")
    }
  }).then((data) => console.log(data)).catch((error) => console.error(error))
 }

 getData(url, method) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json'
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader("Accept", 'application/json')
    xhr.onload = () => {
if(xhr.status >= 200 && xhr.status < 300) {
  resolve(xhr.response)
} else {
  reject(new Error('ОШИБКА ПОЛУЧЕНИЕ ДАННЫХ С БД'))
}

    }
 
    xhr.onerror = () => {
      reject(new Error('Сетевая ошибка'))
    }
    xhr.send()
  })
 }
calculateInfo(noteDoneTasks, doneTasks) {
const allTasks = noteDoneTasks + doneTasks
const percent = (doneTasks / allTasks) * 100
return percent
}
calcalateSrok() {

}
}
function App() {



   const [time, setTime] = useState(new Date().toString().slice(16,25))
  const [doneTasks, setDoneTasks] = useState([])
  const [tasks, setTasks] = useState([])
  const [theme, setTheme] = useState({
    body: '',
    aside: ''
  })
  
   
  
  const targetUser = new User('Alex', 12121323, 2318, 666, 55,34, true , tasks, doneTasks, false, 0, {1: {done: 0, isUpdating: false},2: {done: 0, isUpdating: false}, 3: {done: 0, isUpdating: false}, 4: {done: 0, isUpdating: false}, 5: {done: 0, isUpdating: false}, 6: {done: 0, isUpdating: false}, 7: {done: 0, isUpdating: false}, 'lastUpdadteDay': 0} )
  const [isRegistration, setRegistration] = useState(targetUser.isRegistration)
  const body = 123
const asideRef = useRef()
const [lettersSize, setLettersSize] = useState("")

useEffect(() => {
  if(asideRef.current && Number(lettersSize) <= 20) {
    console.log(lettersSize)
asideRef.current.style.fontSize = `${lettersSize}px`
document.body.style.fontSize = `${lettersSize}px`
  }
},[lettersSize])

useEffect(() => {
  console.log(asideRef.current + "WWWWWWWWWWWWWWWWWWWWWWWWWWWW")
  
 if(asideRef.current) {
    if(theme.body === '#000000') {
      document.body.style.backgroundColor = theme.body
      asideRef.current.style.backgroundColor = theme.aside
      document.body.style.color = '#ffffff'
      asideRef.current.style.color = '#ffffff'
    } else {
    document.body.style.backgroundColor = theme.body
    asideRef.current.style.color = '#000000'
    asideRef.current.style.backgroundColor = theme.aside
    }
 }
}, [theme])


   
    const  [userInfo, setUserInfo] = useState(targetUser)
    
    useEffect(() => {
const updatedObject = new User(userInfo.name, userInfo.password, userInfo.quantityDoneTasks, userInfo.quantityNotDoneTasks, userInfo.quantityAllTasks, userInfo.doneProcent, userInfo.isRegistration, tasks, doneTasks, userInfo.resourcesReady, userInfo.id, userInfo.weekInfo)
      setUserInfo(updatedObject)
    }, [doneTasks, tasks])
    const objectToSend = {
      ...userInfo,
      
    }
    useEffect(() => {
      const handleOutOfSite = (event) => {
        userInfo.sendData(`https://telegrambotfishcombat-default-rtdb.firebaseio.com/newUsers/${userInfo.id}.json`, 'PATCH', objectToSend);
      };
     
  
      handleOutOfSite()
  
    
    }, [userInfo]);

    useEffect(() => {
      const response = localStorage.getItem(0)
      const favicon = document.querySelector("link[rel='icon']")
      if(favicon) {
         document.title = "SuccessStatistic"
       favicon.href = faviconImg
       }
      if(response) {
      setRegistration(response)
      } else {
        console.log('Данных в файлах куки не обнаружено')
      }
    },[])
  
  return (
    <TimeData.Provider value={{time, setTime}} >
    <UserData.Provider value={{userInfo, setUserInfo}}>
      <BrowserRouter>
    <div className="App">
      {isRegistration && userInfo.resourcesReady ?
    <Aside ref={asideRef} fontSize={lettersSize} name={targetUser.name}></Aside>
      : null}
      <Routes>  
        <Route path="/listTasksSection" element={<Main time={time}setDoneTasks={setDoneTasks} doneTasks={doneTasks} tasks={tasks} setTasks={setTasks}></Main>}></Route>
        <Route path="/doneTasks" element={<DoneTasks doneTasks={doneTasks} setDoneTasks={setDoneTasks}></DoneTasks>}></Route>
        <Route path="/profileSection" element={<ProfileSection></ProfileSection>}></Route>
        <Route path="/settingSection" element={<SettingComponent  lettersSize={lettersSize} setLettersSize={setLettersSize} setTheme={setTheme}></SettingComponent>}> </Route>
        <Route path="/homeSection" element={<HomeSection></HomeSection>}></Route>
        <Route path="" element={
  isRegistration && userInfo.resourcesReady && <HomeSection /> ||
  isRegistration && !userInfo.resourcesReady && <Autorization setDoneTasks={setDoneTasks} setTasks={setTasks} /> ||
  !isRegistration && <RegistrationWindow setRegistration={setRegistration} />
}></Route>
<Route path="/statistics" element={<StatisticsComponent tasks={tasks} doneTasks={doneTasks}></StatisticsComponent>}></Route>
<Route path='/autorization' element={<Autorization setDoneTasks={setDoneTasks} setTasks={setTasks}></Autorization>}></Route>
<Route path='/registration' element={<RegistrationWindow setRegistration={setRegistration}/>}></Route>
      </Routes>
      {isRegistration && userInfo.resourcesReady ? 
      <TimeComponent time={time} setTime={setTime}></TimeComponent>
      : null
}
    </div>
    </BrowserRouter>
    </UserData.Provider>
    </TimeData.Provider>
  );
}

export default App;
