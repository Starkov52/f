import React from 'react'
import ProfileItem from './profileItem'
function profileSection({props}) {
    return(
        <div className="profileSection">
<ProfileItem props={props}></ProfileItem>
        </div>
    )
}
export default profileSection