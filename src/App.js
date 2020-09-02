import React,{ Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import Searchbox from './Searchbox';
import './App.css';


class App extends Component  {
	constructor(){
		super()
		this.state={
			robots: robots,
			searchfield:''
		}
	}

  onsearchchange = (event) => {
  	this.setState({ searchfield: event.target.value })
  } 

  render(){

  	const filteredrobots = this.state.robots.filter(robots =>{
  		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  	})
	return (
		<div className='tc'>
			<h1 className='f1'>ROBOFRIENDS</h1>
			<Searchbox searchchange={this.onsearchchange}/>
			<Cardlist robots={ filteredrobots } />
	    </div>
	);
}

	
}

export default App;