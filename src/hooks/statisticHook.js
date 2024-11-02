import React, {useEffect, useContext, useState} from 'react'
import {UserData} from '../App'
import {User} from '../App'
function useWeekState({tasks, doneTasks}) {
    const {userInfo, setUserInfo} = useContext(UserData)
    const [weekArray, setWeekArray] = useState(false)
    useEffect(() => {
if(userInfo.weekInfo['lastUpdateDay'] > 7) {
    const weekInfo = {1: {done: 0, isUpdating: false},2: {done: 0, isUpdating: false}, 3: {done: 0, isUpdating: false}, 4: {done: 0, isUpdating: false}, 5: {done: 0, isUpdating: false}, 6: {done: 0, isUpdating: false}, 7: {done: 0, isUpdating: false}, 'lastUpdateDay': 0}
    setWeekArray(Object.entries(weekInfo))
    const userUpdate = new User(userInfo.name, userInfo.password, userInfo.quantityDoneTasks, userInfo.quantityNotDoneTasks, userInfo.quantityAllTasks, userInfo.doneProcent, userInfo.isRegistration, tasks, doneTasks, userInfo.resourcesReady, userInfo.id, weekInfo)
    setUserInfo(userUpdate)
} else {
    
   const  weekArray = Object.values(userInfo.weekInfo)
    setWeekArray(weekArray)
    console.log(weekArray)
    if(userInfo.weekInfo[new Date().getDay()].isUpdating === false) {
        const updateWeek = userInfo.weekInfo
        updateWeek['lastUpdateDay'] += 1
        console.log()
updateWeek[new Date().getDay()].isUpdating = true
        const userUpdate = new User(userInfo.name, userInfo.password, userInfo.quantityDoneTasks, userInfo.quantityNotDoneTasks, userInfo.quantityAllTasks, userInfo.doneProcent, userInfo.isRegistration, tasks, doneTasks, userInfo.resourcesReady, userInfo.id, updateWeek)
        setUserInfo(userUpdate)
    }
    console.log(userInfo.weekInfo)

}
    },[])
    return weekArray
}
export{ useWeekState }