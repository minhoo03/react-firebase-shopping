import React, { useState } from 'react'

import { Link } from 'react-router-dom'

export default function Nav() {

    const [test, setTest] = useState(false)

    return (
        <>
            <nav style={{ width: '100%', height: '100px', position:'relative' }}>
                <ul style={{ width:'500px', height:'100px', display: 'flex', 
                            justifyContent:'space-around', alignItems:'center', 
                            position: 'absolute', right:'8%' }}>
                    <li>
                        <Link className="li-Link" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="li-Link" to="/introduct">ABOUT US</Link>
                    </li>
                    <li>
                        <Link className="li-Link" to="/product">PRODUCT</Link>
                    </li>

                    {test === false ?                         
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
                            <li className="li-Link">
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
