import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';
import WorkPageNavigation from '../Common/Utill/navigation'

// import style from './work.less'

import Header from '../Header'
import Footer from '../Footer'
import NiharHero from '../Public/images/nihar-gold/nihar-gold-hero.png'
import NiharGoldFront from '../Public/images/nihar-gold/nihar-bottle-front.png'
import GoldLogo from '../Public/images/nihar-gold/gold-logo.png'
import CoconutOilLogo from '../Public/images/nihar-gold/coconut-oil-logo.png'
import NiharGoldBack from '../Public/images/nihar-gold/nihar-bottle-back.png'


//const niharGoldFrontHeight = document.querySelector('.nihar-gold-front').offsetHeight
class NiharShantiAlmond extends Component { 
	
	constructor(props) {
		
		super(props)
		this.state = {
			dimensions: null,
			coconutOilLogoPos : '',
			niharGoldLogoPos: '',
			niharGoldBackPos: '',
			foldSolicColorSec: '',
			sectionHeight: '',
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
		
		const niharGoldFrontHeight = document.querySelector('.nihar-gold-front').offsetHeight
		const coconutOilLogoPos = niharGoldFrontHeight * 1.15,
			niharGoldLogoPos = niharGoldFrontHeight / 4.5,
			niharGoldBackPos = niharGoldFrontHeight / 1.65,
			sectionHeight = niharGoldFrontHeight * 2,
			foldSolicColorSecHeight = sectionHeight / 1.8
			
		  this.setState({
			dimensions: {
				width: this.container.offsetWidth,
				height: this.container.offsetHeight,
			  },
			coconutOilLogoPos : coconutOilLogoPos,
			niharGoldLogoPos : niharGoldLogoPos,
			niharGoldBackPos : niharGoldBackPos,
			foldSolicColorSec : foldSolicColorSecHeight + 'px',
			sectionHeight : sectionHeight + 'px'
		  })

		  const classArray = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const random = classArray[Math.floor(Math.random() * classArray.length)];

        this.setState({
            footerColor: random
        })
	}

	renderContent() {
		const { dimensions } = this.state;
		console.log(dimensions.height)
		// return (
		//   <div>
		// 	width: {dimensions.width}
		// 	<br />
		// 	height: {dimensions.height}
		//   </div>
		// );
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
		const { dimensions, coconutOilLogoPos, niharGoldLogoPos, niharGoldBackPos, sectionHeight, foldSolicColorSec } = this.state;
		return(
				<React.Fragment>
					<Header colorUpdate={this.state.logoColorUpdate}/>
					<div className='page-wrapper work-details-page nihar-gold' id='wrapper'>
						{/** work header start */}
						<div className='full-page-wrapper page-header'>
							<div className='banner-img-container'><img src={NiharHero} /></div>
							<WorkPageNavigation prevLink='/hero-talkies' nextLink='/socranos-gravity' />
						</div>
						{/** work header end */}
						
						
						<div className='full-page-wrapper work-content'>
							{/** work 1st fold content start */}
							<div className="fold-1">
								<div className="container">
									<div className="row justify-content-center no-gutters">
									<div className="col-md-8">
										<div className="work-title">
										<h1>Nihar Shanti Almond</h1>
										</div>

										<div className="work-description">
										<div className="row no-gutters">
											<div className="col-md-5 no-gutters project-initial">
											<ul>
												<li>
												<label>Client</label>
												<span className="client-name">Marico, Nihar Almond</span>
												</li>
												<li>
												<label>Project</label>
												<span className="client-name">Product &amp; Packaging Design</span>
												</li>
												<li>
												<label>Brief</label>
												<span className="client-name">
													Design a product &amp; it’s packaging for Nihar Almond
												</span>
												</li>

												
											</ul>
											</div>
											<div className="col-md-1"></div>
											<div className="col-md-6 project-summary">
											<p>Nihar Almond Oil- a non sticky hair oil, a premium light value added hair oil was introduced in the Nihar Shanti family. Our brief was to create a product design and label design for Nihar Shanti Almond Oil. Competing with Bajaj Almond Drops & Dabur Almond Oil, the product had to be premium and at the same time should be close to perfume/cologne family. 
Testing hundreds of sketches & renders for the structure we came to a finale structure using the ……………..
For the label design we used the only ingredient- Badam with the ………………</p>
											{/* <a href="" className="launch-project">Launch Project</a> */}
											</div>
										</div>
									</div>
											</div>
										</div>
									</div>
								</div>


							{/** work 1st fold content end */}

							{/** work 2nd fold content start */}

							

							<div className='fold-2' style={{height: sectionHeight}}>
								<div className='container'>

									<div className='row justify-content-center no-gutters'>
										<div className='col-md-8' style={{'position': 'relative'}}>
											<div className='img-container pos-absolute nihar-gold-front' ref={el => (this.container = el)}>
												<img src={NiharGoldFront} />
											</div>
											<div className='img-container pos-absolute nihar-gold-logo' style={{'top': niharGoldLogoPos + 'px'}}>
												<img src={GoldLogo} />
											</div>

											<div className='img-container pos-absolute  coconut-oil-logo' style={{'top': coconutOilLogoPos + 'px'}}>
												<img src={CoconutOilLogo} />
											</div>

											<div className='img-container pos-absolute nihar-gold-back' style={{'top': niharGoldBackPos}}>
												<img src={NiharGoldBack} />
											</div>
											
										</div>
										<div className='fold-2-bg' style={{height: foldSolicColorSec}}></div>
									</div>			
								</div>
							</div>
							{/** work 2nd fold content end */}

							{/** work 3rd fold content start */}
								{/* <div className='fold-3'>
									<div className='container'>
										<div className='row justify-content-center no-gutters'>
											<div className='col-md-8'>
												<div className='project-content'>
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
									</div>
								</div> */}
							{/** work 3rd fold content end */}
							
						</div>

						<Footer bgColor='black'>
							<small className='subtitle'>Next project</small>
				        	<Link to='/socranos-gravity' className={`title ${this.state.footerColor}`} data-text="Socranos Gravity">Socranos Gravity
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

export default NiharShantiAlmond