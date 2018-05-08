var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var queryString = require('query-string');


class Results extends React.Component{
	render(){
		var players = queryString.parse(this.props.location.search);
		console.log(players);
		return(
			<div>Results</div>
		)
	}
} 


module.exports = Results;