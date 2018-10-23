import React from 'react';

import './css/card.css';


const Card=({robot})=>{
	let {id,name,email}=robot;
	return(
		<div className="card" >
			<img height={200} width={200} alt="robot" src={`https://robohash.org/${id}?200x200`}/>
			<div> <h2>{name} </h2> </div>
			<p> {email} </p>
		</div>
	);
	}
export default Card;

