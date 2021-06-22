import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function CartPage() {

    let user = useSelector(state => state.user.currentUser)

    useEffect(() => {
        console.log('user', user)
    }, [])


    return (
        <div>
            {user !== null && <p>{user.user.displayName}님의 장바구니입니다.</p>}
        </div>
    )
}
