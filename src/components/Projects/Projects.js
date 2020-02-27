import React, { Component, Fragment } from 'react';
import Octocat from './Octocat.png';
import project1 from './proj_1.png';
import project2 from './proj_2.png';
import project3 from './proj_3.png';
import project4 from './proj_4.png';
import project5 from './proj_5.png';
import project6 from './proj_6.png';
import project7 from './proj_7.png';
import project8 from './proj_8.png';
import Html from './html-5.png';
import Css from './css.png';
import Nodejs from './nodejs.png';
import Bootstrap from './bootstrap.png';
import Wordpress from './wordpress.png';
import Shopify from './shopify.png';
import Reactlogo from './react.png';
import Reduxlogo from './redux.png';
import Jslogo from './javascript.png';
// import './Project.css';
import Tilt from 'react-tilt';

class Projects extends Component {
    render() {
        return(
            <Fragment>
                <div id="Projects" className="ml6-ns ml4 justify-center mt5">
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project1} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Portfolio v1</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://github.com/LadyShinka/Portfolio">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Nodejs} alt="used nodejs to create this project"></img>
                                <img className="h2 pa1" src={Bootstrap} alt="used bootstrap to create this project"></img>
                                <img className="h2 pa1" src={Jslogo} alt="used JavaScript to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://lit-reef-99807.herokuapp.com/home">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project2} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Wordpress Blog</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://wordpress.org/support/article/twenty-seventeen/">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Wordpress} alt="used wordpress to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://smallworldbigdreams.org/">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project3} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Christmas App</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://github.com/LadyShinka/Christmas-App">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Nodejs} alt="used nodejs to create this project"></img>
                                <img className="h2 pa1" src={Bootstrap} alt="used bootstrap to create this project"></img>
                                <img className="h2 pa1" src={Jslogo} alt="used JavaScript to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://christmasapp.popmaria.com/home">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project4} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Robofriends</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://github.com/LadyShinka/robofriends">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Nodejs} alt="used nodejs to create this project"></img>
                                <img className="h2 pa1" src={Reactlogo} alt="used bootstrap to create this project"></img>
                                <img className="h2 pa1" src={Reduxlogo} alt="used bootstrap to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://ladyshinka.github.io/robofriends/">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project5} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Face Recognition App</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://github.com/LadyShinka/facerecognition">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Nodejs} alt="used nodejs to create this project"></img>
                                <img className="h2 pa1" src={Bootstrap} alt="used bootstrap to create this project"></img>
                                <img className="h2 pa1" src={Jslogo} alt="used JavaScript to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://ladyshinka.github.io/facerecognition/">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project6} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Drum Roll</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://github.com/LadyShinka/drumroll">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Bootstrap} alt="used bootstrap to create this project"></img>
                                <img className="h2 pa1" src={Jslogo} alt="used JavaScript to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://ladyshinka.github.io/drumroll/">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project7} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Shopify Website</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://www.shopify.com/">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Shopify} alt="used nodejs to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://daydream-merch.com/">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project8} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Coming Soon</h3>
                                <a className="f6 db link dark-blue hover-blue" href="https://github.com/LadyShinka">
                                    <img className="h3" src={Octocat} alt="view source code"></img>
                                </a>
                            <p className="f6 gray mv1">
                                <img className="h2 pa1" src={Html} alt="used html5 to create this project"></img>
                                <img className="h2 pa1" src={Css} alt="used css3 to create this project"></img>
                                <img className="h2 pa1" src={Reactlogo} alt="used bootstrap to create this project"></img>
                            </p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://github.com/LadyShinka">View Live</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default Projects;