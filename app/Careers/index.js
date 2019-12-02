import React, {Component} from 'react'
import { Link } from "react-router-dom";

import Header from '../Header'
import Footer from '../Footer'
import data from './data.json'
// import style from './careers.less'
class Careers extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data
		}
	}

	render() {
		
		return (
					<React.Fragment>
						<Header />
						<div className='page-wrapper careers-page'>
							<section className='full-page-wrapper current-opening-list'>
								<div className='container'>
									<div className='row'>
										<div className='col-md-8 col-offset-md-2'>
											<div className='col-md-12'>
												<h1>Careers</h1>

												<ul className='opening-list'>
													<li>
														<Link to={`/Job1`}>
															<div className='title'>Designer / Art Director</div>
															<div className='cta-apply'>APPLY</div>
														</Link>
													</li>

													<li>
														<a href=''>
															<div className='title'>Copy Writer</div>
															<div className='cta-apply'>APPLY</div>
														</a>
													</li>
													
													<li>
														<a href=''>
															<div className='title'>Front/Back End Developer</div>
															<div className='cta-apply'>APPLY</div>
														</a>
													</li>
													<li>
														<a href=''>
															<div className='title'>Project Manager</div>
															<div className='cta-apply'>APPLY</div>
														</a>
													</li>
													<li>
														<a href=''>
															<div className='title'>Business Development</div>
															<div className='cta-apply'>APPLY</div>
														</a>
													</li>
													<li>
														<a href=''>
															<div className='title'>Social Media Strategist</div>
															<div className='cta-apply'>APPLY</div>
														</a>
													</li>

												</ul>
											</div>
										</div>
									</div>
								</div>
							</section>

							<div className='current-opening-cta'>
								<div className='container'>
									<div className='row'>
										<div className='col-md-8 col-offset-md-2'>
											<h2>We’re always on the lookout for good talent. </h2>
											<div className='opening-cta'>drop in an email over at <a href='mailto:hello@findcreative.in'> hello@findcreative.in </a></div>
										</div>
									</div>
								</div>
							</div>

							<Footer/>
						</div>
					</React.Fragment>
			)
	}
}

export default Careers