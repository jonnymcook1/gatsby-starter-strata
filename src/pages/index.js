import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'
import full07 from '../assets/images/thumbs/2019-07-11 (3).png'
import full08 from '../assets/images/thumbs/alpha1.png'

import Jonny from '../../src/assets/images/thumbs/JonnyDallas.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full07, thumbnail: full07, description: 'bookr is an application to book artist and influencers for an event. bookr lets any artist register and users can then send in an event request which the artist can accept or decline. Inspired by the notorious "FyreFestival". ', link: 'https://bookr.us/#/' , website: 'bookr.us', github: 'https://github.com/jonnymcook1/bookr'},
    { id: '2', source: full08, thumbnail: full08, description: 'Alpha was a group project that was a mash up of all the best parts on the top airline industries websites. With Alpha, members and users can book flights using the Sabre API and also create their own account to gain travel points.', link: 'https://alphaair.us/#/', website: 'alphaair.com', github: 'https://github.com/flight-club'},
    // { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    // { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const divStyle = {
            fontSize: 70,
            margin: 20,
          };
        const siteTitle = "John Cook"
        const siteDescription = "Site description"
        const siteImage = 'Site Image'

        return (
            <Layout>
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>

                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <meta property='og:image' content={Jonny} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About</h2>
                        </header>
                        <p>I am a US Air Force Veteran and former community manager transitioning into a career as a full stack software engineer. I am passionate about helping people and learning new things. These passions led to the pursuit of a career in web development where I specialize in working with React.js, Node.js, and SQL.
                            
                        When I'm not coding, I'm probably looking for a concert to attend in Deep Ellum, traveling with family and friends, or volunteering at a local community center. </p>
                        <ul className="actions">
                            {/* <li><a href="#" className="button">Learn More</a></li> */}
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Projects</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description, link, website, github }) => ({
                            source,
                            thumbnail,
                            caption,
                            description, 
                            link,
                            website,
                            github
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>
                    <section id='three'>
                        <h2>Skills</h2>
                        <div className='skills-icons'>
                            <i class="devicon-react-original " style={divStyle}></i>
                            <i class="devicon-nodejs-plain" style={divStyle}></i>
                            <i class="devicon-postgresql-plain" style={divStyle}></i>
                            <i class="devicon-javascript-plain" style={divStyle}></i>
                            <i class="devicon-html5-plain" style={divStyle}></i>
                            <i class="devicon-css3-plain" style={divStyle}></i>
                            <i class="devicon-git-plain" style={divStyle}></i>
                        </div>
                        
                    </section>
                    <section id="three">
                        <h2>Contact</h2>
                        {/* <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p> */}
                        <div className="row">
                            <div className="8u 12u$(small)">
                                {/* <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form> */}
                                {/* <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul> */}
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        4510 Abbott Ave. #46<br />
                                        Dallas, TX 75205<br />
                                        United States
                                    </li>
                                    <li href='tel:4058225743'>
                                        <h3 className="icon fa-mobile" href='tel:4058225743'><span className="label">Phone</span></h3>
                                        405-822-5743
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:jonnymcook1@gmail.com">jonnymcook1@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex