import React, { Component, Fragment } from 'react';
import aboutpic from './aboutpic.jpg';
import right from'./next.png';
import left from './back.png';
// import './About.css';

class About extends Component {
    render() {
        return(
            <Fragment>
                <div className="white bg-dark-gray avenir mw10 center ph5-ns pt5">
                    <div className="cf ph2-ns">
                        <div className="fl w-100 w-third-ns">
                        <div className="white bg-dark-gray">
                            <img className='about_picture h5' src={aboutpic} alt='about me'></img>
                        </div>
                        </div>
                        <div className="fl w-100 w-two-thirds-ns pa2 ph3-ns mw8-l">
                        <div className="white bg-dark-gray f4-ns">
                            <h2>About Me</h2>
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
                <div className="fl w-100 pa2 white bg-dark-gray f4 pt4">
                    <p>Find My Resume 
                        <img className='pl2 pr2' src={right} alt='right arrow' style={{ height: 16, width: 16 }}></img> 
                        <a href='https://drive.google.com/file/d/1KmiuARwh5dD0keRhQhSmDNg2MsAiOEkj/view?usp=sharing'>Here</a> 
                        <img className='pl2 pr2' src={left} alt='arrow left' style={{ height: 16, width: 16 }}></img>    
                    </p>
                </div>
            </Fragment>
        )
    }
    
}

export default About;