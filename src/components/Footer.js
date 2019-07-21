import React from 'react'
// import {Link} from 'react-router-dom'


class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/jonnymcook1/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                       <li><a href="https://github.com/jonnymcook1" className="icon fa-github"><span className="label" >Github</span></a></li>
                    </ul>
                    <ul className="copyright">
                        {/* <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
