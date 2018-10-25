import React from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList';
import Search from '../components/Search';
import '../css/style.css';
import Scroll from "../components/Scroll";
import {searchChange} from "./redux/actions/actionCreator";

class App extends React.Component{

	constructor(){
		super()
		this.state={
			robots:[],
			filteredRobots:[],
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(
			res=>res.json()).then(users=>this.setState({robots:users,filteredRobots:users}));
	}

	onChangeSearch=event=>{
		let {robots}=this.state;
        this.props.onChangeSearch(event);
		let filteredRobots=robots;
		filteredRobots=robots.filter(robot=>robot.name.toLowerCase().includes((this.props.query ||'').toLowerCase()));
		this.setState({filteredRobots});
	}

	render(){
		return(
			<div >
				<div className="f3 tc" >
					<h1 >Robo Friends</h1>
					<Search value={this.props.query}search={this.onChangeSearch} />
				</div>
				<Scroll>
					<CardList robots={this.state.filteredRobots} />
				</Scroll>
			</div>
		);
	}
}
const mapStateToProps=state=>{
	console.log('in mapStateToProps',state);
	return {
        query:state.search.text,
	}
}
const mapDispatchToProps=(dispatch)=>{


	return {
		onChangeSearch:(event)=>dispatch(searchChange(event.target.value))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
