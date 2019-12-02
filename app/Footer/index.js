import React, { Component } from 'react';
import Icon from '../Common/Utill/Icon'
class Footer extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div className={`page-footer ${this.props.bgColor}`} id='footer'>
                <footer>
                   <div className='page-footer-wrapper'>
                        <div className='page-footer-content'>
                            {this.props.children}
                        </div>
                    </div> 
                   

                    <div className='common-footer'>
                        <address style={{'visibility': 'hidden'}}>
                            <span>FINDCreative Avenues LLP.</span>
                            A 904/905, Kanakia Wall Street, <br />
                            Chakala, Andheri (E), Mumbai 400093.
                        </address>
                        <span className='copy-writes'>© 2019 FINDCreative Avenues LLP.  </span>
                        <div className='footer-social-icons'>
                            <div className='icon-box'><a target='_blank' href='https://www.facebook.com/findcreative.in/'><Icon icon='facebook' /></a></div>
                            <div className='icon-box'><a target='_blank' href='https://www.instagram.com/findcreativeave/'><Icon icon='instagram' /></a></div>
                            <div className='icon-box'><a target='_blank' href='https://www.linkedin.com/company/13384828/admin/'><Icon icon='linkedin2' /></a></div>
                            <div className='icon-box'><a target='_blank' href='https://twitter.com/findcreativeave'><Icon icon='twitter' /></a></div>
                        
                        </div>
                    </div>
                </footer>
            </div>
         );
    }
}
 
export default Footer;