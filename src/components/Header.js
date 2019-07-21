import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/JonnyDallas.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am John Cook,</strong>
                    <br/> a Web Developer living in Dallas, Tx.
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
