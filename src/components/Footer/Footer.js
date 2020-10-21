import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (<footer>
            <div className="container">
                <div className="row no-margin">
                    <div className="col-md-3 text">
                        <h5>Whiteble</h5>
                        <p>© 2017 Made with love by <a href="http://wearepuredesign.com/" target="_blank">puredesignThemes</a></p>
                    </div>
                    <div className="col-md-3 text small">
                        <p>322 Moon St, Venice, 1231, Italy<br />
                    Mon. - Fri., 9 a.m. - 6.00 p.m.</p>
                    </div>
                    <div className="col-md-2 text small">
                        <p>+(39) 245 45 78 54<br />
                    hey@whiteble.com</p>
                    </div>
                    <div className="col-md-4 text">
                        <div className="row no-margin">
                            <ul className="social">
                                <li><a href><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                                <li><a href><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href><i className="fa fa-vimeo" aria-hidden="true" /></a></li>
                                <li><a href><i className="fa fa-behance" aria-hidden="true" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
    }
}

export default Footer;