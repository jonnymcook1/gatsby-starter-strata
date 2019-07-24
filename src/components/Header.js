import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/JonnyDallas.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>John Cook</strong>
                    <br/> 
                    <h1>Web Developer</h1>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
