import React from 'react'
function doneTasks({title, description, srok, date, finish }) {
    return (
        <li style={{backgroundColor: "#7fe39a"}} className="doneTasks__item">
<h1 className="doneTasks__title">{title}</h1>
<p className='doneTasks__dateCreate'>Дата создания: {date}</p>
<p className="doneTasks__time">Задача выполнена за: {finish.toString().slice(0, 3)}дней</p>
<p className="doneTasks__descriptionTask">{description}</p>
            </li>
    )
}
export default doneTasks