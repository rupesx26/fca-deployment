import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { Link } from 'react-router-dom';

import Header from '../Header'
import Footer from '../Footer'
import PortfolioContainer from './PortfolioContainer'

let lastScrollY = 0;

class Work extends Component { 
	constructor(props) {
		super(props)
		this.state = {
			colorUpdate: false,
			footerColor: '',
			logoColorUpdate: false
		  }
		  this.handleScroll = this.handleScroll.bind(this)
		  this.cssToMatrix = this.cssToMatrix.bind(this)

	}
	componentDidMount() {
		const scrollArea = document.querySelector('.page-wrapper')
        const Scroll = Scrollbar.init(scrollArea)
        Scroll.addListener(this.handleScroll);
		
		const classArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const random = classArray[Math.floor(Math.random() * classArray.length)];

        this.setState({
            footerColor: random
        })
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll (e) { 
		const d = document.getElementById('footer'),
		f = document.getElementById('wrapper'),
		g = document.getElementsByClassName('scroll-content')
		g[0].setAttribute('id', 'scroll')

		const getScrollPos = this.cssToMatrix('scroll').split(',').slice(-1)[0].toString().replace(/[^\w\s]/gi, ''),
            getFinalScrollPos = parseInt(getScrollPos),
			elementPos = d.offsetTop
			
        if(getFinalScrollPos > f.offsetHeight ){
			this.setState({
				logoColorUpdate: false
			}) 
		} else {
			this.setState({
				logoColorUpdate: false
			}) 
		}
        if (getFinalScrollPos === elementPos) {
            this.setState({
                logoColorUpdate: true
            })
		} 
		//else {
        //     this.setState({
        //         logoColorUpdate: true
        //     })
		// }
		
	  }
	  /** To get css transalate  */
	  cssToMatrix(elementId) {
        const element = document.getElementById(elementId),
            style = window.getComputedStyle(element)

    return style.getPropertyValue("-webkit-transform") ||
         style.getPropertyValue("-moz-transform") ||
         style.getPropertyValue("-ms-transform") ||
         style.getPropertyValue("-o-transform") ||
         style.getPropertyValue("transform");

	  }

	render() {
		return(
			<React.Fragment>
				<Header colorUpdate = {this.state.logoColorUpdate}/>
				<div className='page-wrapper portfolio-page' id='wrapper'>
	          		<div className='container'>
	            		<div className='row justify-content-center no-gutters'>
	            			<PortfolioContainer/>
	            		</div>
	           		</div>
		           	<Footer bgColor='black' onScroll={this.handleScroll}>
						<small className='subtitle'>Got a project?</small>
						<Link to='/connect' className={`title ${this.state.footerColor}`}data-text="let's talk">let's talk
                          <div className='footer-arrow'>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                              <div className='chevron'></div>
                          </div>
                      </Link>
			        	
			        </Footer>
	            </div>
	        </React.Fragment>
			)
	}
}

export default Work