import {React, useState, useMemo} from 'react'
import searchIcon from '../icons/free-icon-search-4024513.png'
function SearchComponent({tasks, handleChangeFilterTasks, filterTasks}) {
    const [searchValue,setSearchValue] = useState('')

  const filterPosts = useMemo(() => {
    console.log(`Значение изменилось на: ${searchValue}  `)
    const ready =  tasks.filter((task) => task.title.includes(searchValue))
    handleChangeFilterTasks(ready)
    console.log(filterTasks)
  },[searchValue])
  const handleChange = (event) => {
setSearchValue(event.target.value)
  }
    return (
        <div className="search">
            <img src={searchIcon} className="search__img"></img>
            <input value={searchValue} onChange={handleChange} placeholder='Введите запрос' type='text' className='search__input'></input>
        </div>
    )
}
export default SearchComponent