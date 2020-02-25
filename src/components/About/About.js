import React, { Component, Fragment } from 'react';
import aboutpic from './me-pic.jpg';
import right from'./next.png';
import left from './back.png';
import Tilt from 'react-tilt';
import './About.css';

class About extends Component {
    render() {
        return(
            <Fragment>
                <div className="center ph5-ns pt5 pb5">
                    <blockquote className="quote">
                        Be kind whenever possible. It is always possible.
                    </blockquote>
                </div>
                <div className="near-black bg-silver avenir mw10 center ph5-ns pt5">
                    <div className="cf ph2-ns">
                        <div className="fl w-100 w-third-ns">
                        <div className="near-black bg-silver">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img id="me-pic" className='ba b--black-10' src={aboutpic} alt='about me'></img>
                            </Tilt>
                        </div>
                        </div>
                        <div className="tl lh-copy fl w-100 w-two-thirds-ns pa2 ph3-ns mw8-l">
                        <div className="near-black bg-silver f4-ns">
                            <h2 className="hover-blue text_shadow">About Me</h2>
                            <p>I am a fullstack developer based in UK. I've always been a creative person who loves to bring ideas to life. 
                                Being passionate about web development I tend to give 110% to every project while I keep learning new skills and technologies everyday.
                            </p>
                            <p>
                            A young web developer focused on Front End Web Development with the right set of skills, passion, knowledge, patience and interest to create projects that will make potential customers happy.
                            I am on the other hand an active person who likes reading, travelling and cats.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="near-black bg-silver avenir mw10 center ph5-ns pt5">
                    <div className="w-third-ns near-black bg-silver f4"></div>
                    <div className="fr w-100 w-two-thirds-ns pa2 near-black bg-silver f4 pt4 br3 shadow-3">
                        <p>Find My Resume 
                            <img className='pl2 pr2' src={right} alt='right arrow' style={{ height: 16, width: 16 }}></img> 
                            <a className="dark-blue link dim text_shadow" href='https://drive.google.com/file/d/1KmiuARwh5dD0keRhQhSmDNg2MsAiOEkj/view?usp=sharing'>Here</a> 
                            <img className='pl2 pr2' src={left} alt='arrow left' style={{ height: 16, width: 16 }}></img>    
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }
    
}

export default About;