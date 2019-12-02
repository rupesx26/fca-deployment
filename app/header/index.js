import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../Public/images/fca-logo-black.png'
import logoWhite from '../Public/images/fca-logo-white.png'

import MenuContainer from '../Common/Menu/MenuContainer'
class Header extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            changeColor: 'white'
        }
    }

    render() { 
        let logo = this.props.colorUpdate ? logoWhite : logoBlack
     
        return ( 
            <React.Fragment>
                <Link to='/' className='logo-wrapper'>
                    <div className='logo'><img src={logo}/></div>
                </Link>
               
                <MenuContainer colorUpdate = {this.props.colorUpdate}/>
                {/* <LinkCta router='/connect' position='_fixed _left' linkText='Say Hello' linkClass={`say-hello ${this.props.colorUpdate ? 'invert' : ''}`} />
                <LinkCta router='/' position='_fixed _right' linkText='Scroll' linkClass='scroll-down none' /> */}
            </React.Fragment>
         );
    }
}
 
export default Header;