import React, {Component, Fragment} from 'react';
import Linkedin from './linkedin.png';
import Instagram from './instagram.png';
import Github from './github.png';
import Copyright from './copyright.png';

class Contact extends Component {
    render() {
        return(
            <Fragment>
                <div className="mw10 center near-black bg-silver avenir pb0 mb0">
                    <div id="Contact" className="fl w-100 near-black bg-silver avenir br3 mb0 pb0">
                        <h4 className="shadow-3 mw5 center br3 pa2 hover-blue">Contact Information</h4>
                        <h4>Email <a className="f6 link dim lighets-blue" href="mailto:p.mariateodora@yahoo.co.uk?subject=Get in touch through your website">p.mariateodora@yahoo.co.uk</a></h4>
                        <a className="link dim mb0 pb0" href="https://www.linkedin.com/in/maria-teodora-pop-64825b156/"><img className="h2 pa3" alt="Connect with me on LinkedIn" src={Linkedin}></img></a>
                        <a className="link dim mb0 pb0" href="https://www.instagram.com/pop_teodora/"><img className="h2 pa3" alt="Connect with me on LinkedIn" src={Instagram}></img></a>
                        <a className="link dim mb0 pb0" href="https://github.com/LadyShinka"><img className="h2 pa3" alt="Connect with me on LinkedIn" src={Github}></img></a>
                        <h4><img className="h2 mt0 pt0" alt="Copyright 2020 Maria Pop" src={Copyright}></img>2020 Maria Pop</h4>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default Contact;