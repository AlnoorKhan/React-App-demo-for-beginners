var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
	render () {
		return (
				<div className='home-container'>
					<h1>Github Battle : Battle your Friends... and stuff.</h1>
					<Link className='button' to='/battle'>
					Button
					</Link>
				</div>
			)
	}
}

module.exports = Home