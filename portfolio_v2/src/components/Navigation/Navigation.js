import React, { Component } from 'react';
import './Navigation.css';
import Tilt from 'react-tilt';
import logo from './logo.png';

class Navigation extends Component {
    render() {
        return (
            <header className="sans-serif">
                <div id="cover" className="cover bg-left bg-center-l shadow-6">
                    <div className="bg-black-80 pb5 pb6-m pb7-l">
                    <nav className="dt w-100 mw8 center"> 
                    <div className='ma4 mt0'>
                        <Tilt className="Tilt br2 shadow-3" options={{ max : 30 }} style={{ height: 80, width: 80 }} >
                            <div className="Tilt-inner pa2">
                                <img alt='brain logo'src={logo}></img>
                            </div>
                        </Tilt>
                    </div>
                        <div className="dtc v-mid tr pa3">
                        <a className="f5 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >About Me</a> 
                        <a className="f5 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Achievements</a> 
                        <a className="f5 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Projects</a> 
                        <a className="f5 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Contact Me</a> 
                        </div>
                    </nav> 
                    <div className="tc-l mt4 mt5-m mt6-l ph3">
                        <h1 className="f1 f1-l fw2 white-90 mb0 lh-title">Maria Pop</h1>
                        <h2 className="fw1 f3 white-80 mt3 mb4">Web Developer | Creator | Dreamer | Problem solver</h2>
                        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Contact Me</a>
                        <span className="dib v-mid ph3 white-70 mb3">or</span>
                        <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="{}">View Projects</a>
                    </div>
                    </div>
                </div> 
            </header>
        )
    }
    
    
}

export default Navigation;