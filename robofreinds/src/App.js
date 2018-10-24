import React from 'react';

import CardList from './CardList';
import Search from './Search';
import './css/style.css';
import {robots} from './robots';
import Scroll from "./Scroll";

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
