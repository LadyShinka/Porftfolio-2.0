import React, { Component, Fragment } from 'react';
import project1 from './proj_1.png';
import Tilt from 'react-tilt';

class Projects extends Component {
    render() {
        return(
            <Fragment>
                <div className="ml6-ns justify-center mt5">
                    <section className="fl pa3 pa5-ns mt4 br3 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5 br3">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project1} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <h3 className="f5 db dark-blue hover-blue">Portfolio v1</h3>
                            <a className="f6 db link dark-blue hover-blue" href="https://google.com">Source Code</a>
                            <p className="f6 gray mv1">Technologies</p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://google.com">Website Link</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project1} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <a className="f6 db link dark-blue hover-blue" href="https://google.com">Portfolio v1</a>
                            <p className="f6 gray mv1">5 mutual friends</p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://google.com">Add Friend</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project1} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <a className="f6 db link dark-blue hover-blue" href="https://google.com">Portfolio v1</a>
                            <p className="f6 gray mv1">5 mutual friends</p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://google.com">Add Friend</a>
                            </div>
                            </Tilt>
                        </article>
                    </section>
                    <section className="fl pa3 pa5-ns mt4 mw6">
                        <article className="hide-child relative ba b--black-20 mw5 center shadow-5">
                            <Tilt className="Tilt" options={{ max : 30 }} >
                            <img src={project1} className="db" alt="project1" />
                            <div className="pa2 bt b--black-20">
                            <a className="f6 db link dark-blue hover-blue" href="https://google.com">Portfolio v1</a>
                            <p className="f6 gray mv1">5 mutual friends</p>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="https://google.com">Add Friend</a>
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