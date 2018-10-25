import React from 'react';

import CardList from '../components/CardList';
import Search from '../components/Search';
import '../css/style.css';
import {robots} from '../container/robots';
import Scroll from "../components/Scroll";

export default class App extends React.Component{
	state={
		robots:robots,
		query:'',

	}
	onChangeSearch=(event)=>{
		this.setState({query:event.target.value});
		let filteredRobots=this.state.robots;
		filteredRobots=robots.filter(robot=>robot.name.toLowerCase().includes(this.state.query.toLowerCase()));
		this.setState({robots:filteredRobots});

	}
	render(){
		return(
			<div >
				<div className="f3 tc" >
					<h1 > Robo Freinds</h1>
					<Search value={this.state.query}search={this.onChangeSearch} />
				</div>
				<Scroll>
					<CardList robots={this.state.robots} />
				</Scroll>
			</div>
		);
	}

}
