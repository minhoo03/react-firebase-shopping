import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { clearUser } from '../Redux/actions/user_action'

import { useHistory } from 'react-router-dom'

export default function Nav() {

    let history = useHistory()
    const dispatch = useDispatch()

    const user = useSelector(state => state.user.currentUser)
    const [userState, setUserState] = useState(false)

    useEffect(() => {
        if (user != null) {
            setUserState(true)
        } else {
            setUserState(false)
        }
    }, [user])

    const handleLogout = () => {
        dispatch(clearUser())
        history.push('/')
    }

    return (
        <>
            <nav style={{ width: '100%', height: '100px', position: 'relative' }}>
                <ul style={{
                    width: '500px', height: '100px', display: 'flex',
                    justifyContent: 'space-around', alignItems: 'center',
                    position: 'absolute', right: '8%'
                }}>
                    <li>
                        <Link className="li-Link" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="li-Link" to="/product">PRODUCT</Link>
                    </li>

                    {userState === false ?
                        <>
                            <li>
                                <Link className="li-Link" to="/login">LOGIN</Link>
                            </li>
                            <li>
                                <Link className="li-Link" to="/register">REGISTER</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link className="li-Link" to="/upload">UPLOAD</Link>
                            </li>
                            <li className="li-Link" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                LOGOUT
                            </li>
                            <li>
                                <Link className="li-Link" to="/my-cart">MY CART</Link>
                            </li>
                        </>
                    }


                </ul>
            </nav>
        </>


    )
}
