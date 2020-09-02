import React from 'react';


const Searchbox = ({searchfied,searchchange}) => {

	return (
		<div className='pa2'>
		<input 
		className='pa3 b--green bg-lightest-blue'
		type='search' 
		placeholder='search robots'
		onChange={searchchange}
		 />
		
		</div>
	);
}

export default Searchbox;