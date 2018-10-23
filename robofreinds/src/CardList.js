import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {robots} from './robots';
import Card from './Card';

const CardList=()=>{

	return( 
		<div >

			{robots.map((robot)=><Card robot={robot}/>)}
		</div>
	);
}
export default CardList
