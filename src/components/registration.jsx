import React, {useState, useEffect, useRef, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserData} from '../App'
import {User} from '../App'
function RegistrationWindow({setRegistration}) {
    const {userInfo, setUserInfo} = useContext(UserData)
    const [inputValue, setInputValue] = useState({
        login: '',
        password: '',
    })
    const linkRef = useNavigate()
    const [registrationStateL, setRegistrationStateL] = useState(false)
    const [registrationStateP, setRegistrationStateP] = useState(false)
    const loginRef = useRef()
    const passwordRef = useRef()
    const HandleChangeInputValuePassword  = (event) => {
        const regExp = /^(?=(?:.*[A-Za-zА-Яа-я]){3,})(?=(?:.*\d){8,}).[A-Za-zА-Яа-я\d]{10,30}$/g
        const password = event.target.value
        
        if(password.match(regExp)) {
            console.log(0)
            setRegistrationStateP(true)
setInputValue({
    ...inputValue,
    password: event.target.value
})
passwordRef.current.style.border = "2px solid green"
        } else {setInputValue({
            ...inputValue,
            password: event.target.value
        })
        setRegistrationStateP(false)
        passwordRef.current.style.border = "2px solid red"
            console.log(1)
        }
    }
const HandleChangeInputValueLogin  = (event) => {
    const regExp = /^(?=(?:.*[A-Za-zА-Яа-я]){5,})(?=[A-Za-zА-Яа-я])(?=(?:.*\d){3,}).[A-Za-zА-Яа-я\d]{10,35}$/g
    const login = event.target.value
    setInputValue({
        ...inputValue,
        login: event.target.value,
    })
    if(login.match(regExp)) {
        setRegistrationStateL(true)
        console.log("Проверка пройдена")
        loginRef.current.style.border = "2px solid green"
} else {
    console.log("Проверка не пройдена")
    loginRef.current.style.border = "2px solid red"
    setRegistrationStateL(false)
}
    }
    useEffect(() => {
        console.log(inputValue)
    },[inputValue])
    function sendCookieData() {
        const isRegistrationCookie = true
        localStorage.setItem(0, JSON.stringify(isRegistrationCookie))
    }
    const checkRegistration = () => {
        
        if(registrationStateL && registrationStateP) {
            const newUser = new User(inputValue.login, inputValue.password, 0, 0, 0, 0, true,[], [], false, 0,{1: {done: 0, isUpdating: false},2: {done: 0, isUpdating: false}, 3: {done: 0, isUpdating: false}, 4: {done: 0, isUpdating: false}, 5: {done: 0, isUpdating: false}, 6: {done: 0, isUpdating: false}, 7: {done: 0, isUpdating: false}, 'lastUpdateDay': 0})
            sendCookieData()
            setUserInfo(newUser)
            console.log(userInfo)
        
    linkRef('')
    userInfo.sendData("https://telegrambotfishcombat-default-rtdb.firebaseio.com/newUsers.json", 'POST', newUser)
    setRegistration(true)
        }
    }
return (
    <div className='registrationSection'>
        <div className='registrationSection__inner'>
        <h1 className="registrationSection__title">Регистрация</h1>
        <p className="registrationSection__loginText">Введите логин</p>
        <input value={inputValue.login} type='text' ref={loginRef} onChange={HandleChangeInputValueLogin} className="registrationSection__inputLogin" placeholder="Введите логин"></input>
        <p className="registrationSection__passwordText">Введите пароль</p>
        <input value={inputValue.password} type='text' ref={passwordRef} onChange={HandleChangeInputValuePassword} className="registrationSection__inputPassword" placeholder="Введите пароль"></input>
        <button onClick={checkRegistration} className='registrationSection__createAccount'>Зарегистрироваться</button>
        <Link to='/autorization'>Зарегистрированны?, перейти в раздел авторизации</Link>
        </div>
    </div>
)
}
export default RegistrationWindow