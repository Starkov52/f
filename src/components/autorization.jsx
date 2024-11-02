import React, {useRef, useState, useEffect, useContext} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {UserData} from '../App'
import {User} from '../App'
function Autorization({setDoneTasks, setTasks}) {
    const {userInfo, setUserInfo} = useContext(UserData)
    const [start, setStart] = useState(false)
    const [inputValue, setInputValue] = useState({
        login: '',
        password: ''
    })
    const navigate = useNavigate()
    const loginRef = useRef('')
    const passwordRef = useRef('')
    const HandleChangeInputValueLogin = (event) => {
setInputValue({
    ...inputValue, 
    login: event.target.value
})
    }
    const HandleChangeInputValuePassword = (event) => {
        setInputValue(
            {
        ...inputValue,
        password: event.target.value
            }
        )
    }
   
    const checkAutorization = () => {
        console.log(inputValue.login + "WWWWWWWWW" + userInfo.name)
        userInfo.getData('https://telegrambotfishcombat-default-rtdb.firebaseio.com/newUsers.json', 'GET').then((response) => {
            for(let [key, value] of Object.entries(response)) {
                if(inputValue.login === value.name && inputValue.password === value.password) {
                   console.log("АККАУНТ ДЕЙСТВИТЕЛЕН")
                
                   const newUser = new User(value.name, value.password, value.quantityDoneTasks, value.quantityNotDoneTasks, value.quantityAllTasks, value.doneProcent, true, value.allTasks || [], value.doneTasks || [], true, key, value.weekInfo)
                   setUserInfo(newUser)
                   setDoneTasks(value.doneTasks || [])
                   setTasks(value.allTasks || [])
                   console.log(value)
                setStart(true)
                  if(userInfo.id) {
                    console.log(userInfo.id + "СОСТОЯВИШИЙСЯ ЮЗЕР")
                  }
                 
                   navigate('/')
                } else {
                    console.log("Неверный пароль")
                }
               }
         
        })
    }

    
    return(
        <div className='registrationSection'>
        <div className='registrationSection__inner'>
        <h1 className="registrationSection__title">Авторизация</h1>
        <p className="registrationSection__loginText">Введите логин</p>
        <input value={inputValue.login} type='text' ref={loginRef} onChange={HandleChangeInputValueLogin} className="registrationSection__inputLogin" placeholder="Введите логин"></input>
        <p className="registrationSection__passwordText">Введите пароль</p>
        <input value={inputValue.password} type='text' ref={passwordRef} onChange={HandleChangeInputValuePassword} className="registrationSection__inputPassword" placeholder="Введите пароль"></input>
        <button onClick={checkAutorization} className='registrationSection__createAccount'>Авторизироваться</button>
        <Link to='/registration'><p>Не зарегистрированны?, перейти в раздел регистрации</p></Link>
        </div>
    </div>
    )
}
export default Autorization