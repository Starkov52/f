import {React, useContext} from 'react'
import profileImg from '../icons/free-icon-user-847969.png'
import {UserData} from '../App'
function ProfileItem() {
    const {userInfo, setUserInfo} = useContext(UserData)
    return(
        <div className='profileSection__inner'>
            <div className="profileSection__profile">
                <img src={profileImg} className='profileSection__profileImg'></img>
                <p className='profileSection__userName'>{userInfo.name}</p>
                </div>
                <p className='profileSection__quantityOfNotes'>Поставил {userInfo.quantityAllTasks} задач</p>
                <p className='profileSection__doneTasks'>Довел до конца {userInfo.quantityDoneTasks} задач</p>
                <p className='profileSection__dateOfRegistation'>Активен с: {new Date().toString().slice(0, 15)}</p>
                <p className='profileSection__quantityNotDoneTasks'>Осталось:  {userInfo.quantityNotDoneTasks} задач</p>
            </div>
    )
}
export default ProfileItem