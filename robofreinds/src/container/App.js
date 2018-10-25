import React from 'react';

import CardList from '../components/CardList';
import Search from '../components/Search';
import '../css/style.css';
import Scroll from "../components/Scroll";

export default class App extends React.Component{

	constructor(){
		console.log("constructor");
		super()
		this.state={
			robots:[],
			filteredRobots:[],
			query:'',
		}
	}

	/* //another way to initialize state
	state={
		robots:robots,
		query:'',
	}
	*/
	componentDidMount(){
		console.log("componentDidMount");
		//this.fetchUser()
		fetch('https://jsonplaceholder.typicode.com/users').then(
			res=>res.json()).then(users=>this.setState({robots:users,filteredRobots:users}));

	}
	//TODO use async and await to fetchUsers
		/*
	fetchUser=async ()=>{
		const res=await fetch('https://jsonplaceholder.typicode.com/users');
		res.then()
		console.log(res);
	}
	/*
 shouldComponentUpdate(){
		console.log("shouldComponentUpdate");
		return true;
	}
	*/

	onChangeSearch=(event)=>{
		this.setState({query:event.target.value});
		let filteredRobots=this.state.robots;
		filteredRobots=this.state.robots.filter(robot=>robot.name.toLowerCase().includes(this.state.query.toLowerCase()));
		this.setState({filteredRobots});

	}
	render(){
		console.log("render");
		return(
			<div >
				<div className="f3 tc" >
					<h1 > Robo Freinds</h1>
					<Search value={this.state.query}search={this.onChangeSearch} />
				</div>
				<Scroll>
					<CardList robots={this.state.filteredRobots} />
				</Scroll>
			</div>
		);
	}

}
