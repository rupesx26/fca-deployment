import React, {Component} from 'react'
import Scrollbar from 'smooth-scrollbar';
import { Link } from "react-router-dom";

import Header from '../Header'
import Footer from '../Footer'

// import style from './connect.less'

class Connect extends Component {

	componentDidMount() {
        Scrollbar.init(document.querySelector('.page-wrapper'));
    }
    
	render() {
		return (
				<React.Fragment>
					<Header />
					<div className='page-wrapper connect-page'>

						<section className='full-page-wrapper contact-form'>
							<div className='container'>
								<div className='row'>
									<div className='col-md-8 col-offset-md-2'>
										<div className='col-md-10'>
											<h1>Want to work with us? Get in touch.</h1>
											<div className='sub-title'>
												Together, let’s find the best ways to build your brand.
											</div>

											<form>
												<div className='form-field'>
													<label>Your Name</label>
													<input type='text' className='field' />
												</div>

												<div className='form-field'>
													<label>Your E-mail</label>
													<input type='text' className='field' />
												</div>

												<div className='form-field'>
													<label>Your Company</label>
													<input type='text' className='field' />
												</div>

												<div className='form-field'>
													<label>Tell us about your project</label>
													<input type='text' className='field' />
												</div>

												<div className='agreement'>
													<label>
														<input type='checkbox' />
														<span className='checkmark'></span>
														<span className='text'>I have read and agree with <a href=''>FCA’s privacy policy.</a></span>
													</label>
												</div>

												<button className='submit-button'>Submit</button>

											</form>

										</div>
									</div>
								</div>
							</div>
						</section>

						<section className='full-page-wrapper contact-types bg-color-gray'>
							<div className='container'>
								<div className='row'>
									<div className='col-md-8 col-offset-md-2'>
										<div className='row'>
												
										<div className='col-md-6'>
											<div className='contact-box'>
												<h5>Email us</h5>
												<div className='details'>
													<a href='mailto:hello@findcreative.in'>hello@findcreative.in</a>
												</div>
											</div>
										</div>
										<div className='col-md-6'>
										<div className='contact-box visit-us'>
											<h5>Visit us</h5>
											<div className='details'>
												<address>
													A 904/905, Kanakia Wall Street, <br/>Chakala, Andheri (E), <br/> Mumbai 400093.
												</address>
											</div>
											</div>
										</div>
										<div className='col-md-6'>
										<div className='contact-box call-us'>
											<h5>Call us</h5>
											<div className='details'>
											022 4034 8888
											</div>
											</div>
										</div>

										</div>
									</div>
								</div>
							</div>
						</section>

						<div className='current-opening-cta'>
							<div className='container'>
								<div className='row'>
									<div className='col-md-10 col-offset-md-2'>
										<h2>Are you an aspiring creative?</h2>
										<Link to='/careers' className='opening-cta'>Current Openings</Link>
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

export default Connect