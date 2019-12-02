import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'

import Header from '../Header'
import Footer from '../Footer'

// import style from './work.less'

class Tlc extends Component { 


	constructor(props) {
		super(props)
		this.state = {
			colorUpdate: true,
			logoColorUpdate: true,
			footerColor: ''
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

	handleScroll (e) { 
		const d = document.getElementById('footer'),
		f = document.getElementById('wrapper'),
		g = document.getElementsByClassName('scroll-content')
		g[0].setAttribute('id', 'scroll')

		const getScrollPos = this.cssToMatrix('scroll').split(',').slice(-1)[0].toString().replace(/[^\w\s]/gi, ''),
            getFinalScrollPos = parseInt(getScrollPos),
			elementPos = d.offsetTop
			
        if(getFinalScrollPos > (f.offsetHeight - 50) ) {
			this.setState({
				logoColorUpdate: false
			}) 
		} else {
			this.setState({
				logoColorUpdate: true
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
					
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page' id='wrapper'>
						<div className='full-page-wrapper page-header'>
							<WorkPageNavigation prevLink='/rapid-rupee' nextLink='/sussegado-coffee' />
						</div>
						
						<div className='full-page-wrapper work-content'>
							<div className='container'>
								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='work-title'>
											<h1>The Laughing Cow</h1>
										</div>

										<div className="work-description">
										<div className="row no-gutters">
											<div className="col-md-5 no-gutters project-initial">
											<ul>
												<li>
												<label>Client</label>
												<span className="client-name">The Laughing Cow</span>
												</li>
												<li>
												<label>Project</label>
												<span className="client-name">Communication &amp; Packaging Design</span>
												</li>
												<li>
												<label>Brief</label>
												<span className="client-name">
												Design communication &amp; packaging 
												</span>
												</li>

												
											</ul>
											</div>
											<div className="col-md-1"></div>
											<div className="col-md-6 project-summary">
											<p>We helped launch this 97-year old French brand in India. As their creative partners, we designed various in-store displays, banners, consumers leaflets, and also created an AV for their launch event. We also re-designed some of their packaging and communication, to fit into the Indian market.</p>
											{/* <a href="" className="launch-project">Launch Project</a> */}
											</div>
										</div>
									</div>

									</div>
								</div>

								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='project-image-container'>

										</div>
									</div>
								</div>


								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='project-content'>
												<h2>Lorem ipsum</h2>
												<div className='col-md-6 no-gutters'>
													<p>Lorem ipsum dolor sit amet, consectetur 
													adipiscing elit, sed do eiusmod tempor
													incididunt ut labore et dolore magna aliqua. 
													Ut enim ad minim veniam, quis nostrud exercitation 
													ullamco laboris nisi ut aliquip ex ea commodo 
													consequat.</p>
												</div>
										</div>
									</div>
								</div>


								<div className='row justify-content-center no-gutters'>
									<div className='col-md-8'>
										<div className='project-image-container'>

										</div>
									</div>
								</div>


								<div className='row justify-content-center no-gutters'>
									<div className='second-fold'>
										<div className='col-md-8'>
											<div className='project-content align-right'>
												
											</div>
										</div>

									</div>
								</div>


							</div>
						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/sussegado-coffee' className={`title ${this.state.footerColor}`} data-text="Sussegado Coffee">Sussegado Coffee
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

export default Tlc