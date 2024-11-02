import {React, useState, useEffect, useRef} from 'react'
function SettingComponent({setTheme, lettersSize, setLettersSize}) {
  const [inputLettersValue, setInputLettersValue] = useState('')
    function handleChangeTheme(firstColor, secondColor) {
        setTheme({body: firstColor, aside: secondColor})
    }
    const handleChangeSize = (event) => {
        setInputLettersValue(event.target.value)
    }
    useEffect(() => {
        setLettersSize(inputLettersValue)
    },[inputLettersValue])
    return(
        <div className="setting">
            <div className="setting__inner">
            <h1 className="setting__title">Настройки</h1>
            <p className='setting__themeTitle'>Тема интерфейса</p>
            <ul className="setting__themes">
                <li onClick={() => {handleChangeTheme('#c6e66e', '#b6d1bd')}}className="setting__item">
                    <div style={{backgroundColor: "#c6e66e"}} className='setting__color'></div>
                    <p colorValue='#c6e66e' className="setting__text">Светло-зеленый</p>
                </li>
                <li onClick={() => {handleChangeTheme('#bd2b11','#dea79b' ) }} className="setting__item">
                    <div style={{backgroundColor: "#bd2b11"}} className='setting__color'></div>
                    <p colorValue="#bd2b11" className="setting__text">Красный</p>
                </li>
                <li onClick={() => {handleChangeTheme('#f5f587', '#e8eba0')}} className="setting__item">
                    <div style={{backgroundColor: "#f5f587"}} className='setting__color'></div>
                    <p colorValue="#f5f587" className="setting__text">Светло-желтый</p>
                </li>
                <li onClick={() => {handleChangeTheme('#40ed6e', '#7ffaa0')}} className="setting__item">
                    <div style={{backgroundColor: "#40ed6e"}} className='setting__color'></div>
                    <p className="setting__text">Светло-зеленый</p>
                </li>
                <li onClick={() => {handleChangeTheme('#000000', '#353836')}} className="setting__item">
                    <div style={{backgroundColor: "black"}} className='setting__color'></div>
                    <p className="setting__text">Темный</p>
                </li>
            </ul>
            <h1 className="setting__titleLanguage">Язык интерфейса</h1>
            <select className="setting__languageSelect">
                <option selected className="setting__languageSelected" value="russian">Русский</option>
                <option className="setting__languageSelected" value="english">Английский</option>
            </select>
            <h1 className="setting__titleLetters">Размер шрифта</h1>
            <input onChange={handleChangeSize}type="text" className="setting__lettersSize"></input>
        </div>
        </div>
    )
}
export default SettingComponent