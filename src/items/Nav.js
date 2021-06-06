import React from 'react'

import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div style={{display:'flex'}}>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/introduct">ABOUT US</Link>
                            </li>
                            <li>
                                <Link to="/product">PRODUCT</Link>
                            </li>
                            <li>
                                <Link to="/my-cart">MY CART</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>

        
    )
}
