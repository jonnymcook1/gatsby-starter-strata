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

const DEFAULT_IMAGES = [
    { id: '1', source: full07, thumbnail: full07, description: 'bookr is an application to book artist and influencers for an event. bookr lets any artist register and users can then send in an event request which the artist can accept or decline. Inspired by the notorious "FyreFestival". ', link: 'https://bookr.us/#/' , website: 'bookr.us', github: 'https://github.com/jonnymcook1/bookr'},
    { id: '2', source: full08, thumbnail: full08, description: 'Alpha Air', link: 'alpha.com', website: 'alpha.com', github: 'https://github.com/flight-club'},
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
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>

                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About</h2>
                        </header>
                        <p>I am a Web Developer living in Dallas, Tx.  Born in Tulsa, Ok and US Air Force veteran. I moved to Dallas in early 2018 at 25 years old and was still in this place of not knowing where life would take me. I always had grand ideas that were mostly followed with "that would be a cool app", and so I started to wonder how I could actually build these "cool apps". I have been constantly grinding to learn more about web development and being able to bring these grand ideas to life. I believe the best thing someone can do is bring value to others and hope to do so with the applications I am working on, so lets build one!</p>
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
                                    <li>
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