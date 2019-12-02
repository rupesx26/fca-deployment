import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'
import { Link } from 'react-router-dom';
import logoWhite from '../../Public/images/fca-logo-white.png'
import Icon from '../../Common/Utill/Icon'



class MenuContainer extends Component {

	constructor(props){
		super(props);
	    this.state={
	      menuOpen:false,
	      invertText: '#000'
	    }
	    this.handleLinkClick = this.handleLinkClick.bind(this)
	    this.handleMenuClick = this.handleMenuClick.bind(this)
	    
	  }
	  
	  handleMenuClick() {
	    this.setState({
        	menuOpen:!this.state.menuOpen
		  });
		 // console.log(this.state.menuOpen)
		  this.state.menuOpen ?  document.body.classList.remove('menu-open') : document.body.classList.add('menu-open');
	  }

	//   componentDidMount() {
	// 	  this.state.menuOpen ? document.body.classList.add('modal-open') : document.body.classList.remove('modal-open');
	// 	  console.log(this.state.menuOpen)

	//   }
	  handleLinkClick() {
	    this.setState({
	    	menuOpen: false,
	    	invertText: '#000'
	    });
		this.state.menuOpen ?  document.body.classList.remove('menu-open') : document.body.classList.add('menu-open');

	  }


    render() { 
		//console.log('menu-container', this.props.colorUpdate ? 'white' : 'black')
     const menu = ['Difference','Work','Connect']
     const menuItems = menu.map((val,index)=>{
      const delayValue = index
      const links = val.toLowerCase()
       return (
       <MenuItem key={index} route={links} number={`0${index+1}.`} delay={`${index * 0.08}s`} onClick={()=>{this.handleLinkClick()}}>{val}
    	</MenuItem>
    	)
     });

    	return ( 
            <React.Fragment>
		        <div className='menu-container'>
					{
						this.state.menuOpen &&
						<Link to='/' className='logo-wrapper'>
							<div className='logo'><img src={logoWhite}/></div>
						</Link>
					}
		          <MenuButton colorChange={this.props.colorUpdate ? 'white' : 'black'} open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} />
				  
		        </div>
		        <Menu open={this.state.menuOpen}>
					  {menuItems}
					  <div className='footer-social-icons'>
					 		<div className='icon-box'><a target='_blank' href='https://www.facebook.com/findcreative.in/'><Icon icon='facebook' /></a></div>
                            <div className='icon-box'><a target='_blank' href='https://www.instagram.com/findcreativeave/'><Icon icon='instagram' /></a></div>
                            <div className='icon-box'><a target='_blank' href='https://www.linkedin.com/company/13384828/admin/'><Icon icon='linkedin2' /></a></div>
                            <div className='icon-box'><a target='_blank' href='https://twitter.com/findcreativeave'><Icon icon='twitter' /></a></div>
                        
                        </div>
		        </Menu>

				
		        
		    </React.Fragment>
         );
    }
}

export default MenuContainer;








