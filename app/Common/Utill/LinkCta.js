import React from 'react'
import { Link } from 'react-router-dom';


const LinkCta = props => {
	const {router, linkText, position, linkClass} = props
	return (
			<div className={`cta-wrapper ${position}`}>
				<Link to={router} className={linkClass}>{linkText}</Link>
			</div>
		
		)
}

export default LinkCta