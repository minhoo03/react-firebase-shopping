import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Mainpage() {

    let user = useSelector(state => state.user.currentUser)

    useEffect(() => {
        console.log('user', user)
    }, [])


    return (
        <div>
            MainPage{user !== null && <span>, {user.user.displayName}님 안녕하세요.</span>}
        </div>
    )
}
