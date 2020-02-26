import React, {Component, Fragment} from 'react';
import Html from './html-5.png';
import Css from './css.png';
import Nodejs from './nodejs.png';
import Bootstrap from './bootstrap.png';
import Wordpress from './wordpress.png';
import Shopify from './shopify.png';
import Reactlogo from './react.png';
import Reduxlogo from './redux.png';
import Jslogo from './javascript.png';
import 'tachyons';


class Contact extends Component {
    render() {
        return(
            <Fragment>
                <div className="mw9 center bg-navy avenir">
                    <div className="fl w-100 h-75 black bg-navy avenir br3 pb3 mb3">
                        <h1 className="dark-grey hover-blue text_shadow">Skills</h1>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Html} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Css} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Nodejs} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Bootstrap} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Wordpress} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Shopify} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Reactlogo} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Reduxlogo} alt="top skill"></img>
                        <img className="h3 pa3 shadow-3 ma3 br3 bg-dark-blue" src={Jslogo} alt="top skill"></img>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default Contact;