import React, { Component } from 'react';
import "material-components-web/dist/material-components-web.min.css";
import Button from '@material-ui/core/Button';
import './viewAll.css';

class viewAll extends Component{

	state = {active:false};
	constructor(props){
		super(props)

		this.state = {
			array: undefined,
			isLoaded: false,
		}
	}

	componentDidMount(){
		fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=xhrfa56HkJT1KaOvi7fCWcN1sCAJM9eyDJp5zWrU")
		.then(res => res.json())
		.then(res => {
			console.log(res);
			var data = res;
			this.setState({
				isLoaded: true,
				array: data
			})
			console.log(this.state.array);
		})
	}

	render (){
		const { isLoaded,array } = this.state;
		console.log("DATA of View All page======>",this.state.array);
		if (!isLoaded) {
			return (
				<center><div class="loader"></div></center>
			)
		}
		else if(isLoaded){
			return(
				<div class="mdc-layout-grid">
					<div class="mdc-layout-grid__inner">
						<div class="mdc-layout-grid__cell--span-12">
							<center><h2>Browse the Near Earth Objects service</h2></center>
						</div>
					</div>
					<div class="mdc-layout-grid__inner">
							{array.near_earth_objects.map((item,index)=>{
								return(
								<div class="mdc-layout-grid__cell--span-4">
								<div class="mdc-card demo-card demo-basic-with-header">
								<div class="demo-card__primary card_title">
								<h2 class="demo-card__title mdc-typography mdc-typography--headline6"><b>{item.name}</b></h2>
								</div>
								<div class="mdc-layout-grid__inner">
								<div class="mdc-layout-grid__cell--span-1"></div>
								<div class="mdc-layout-grid__cell--span-5">
								<p><b>Neo Id:</b></p>
								<p><b>Magnitude:</b></p>
								<p><b>Diameter (feet):</b></p>
								<p><b>Diameter (Km):</b></p>
								</div>
								<div class="mdc-layout-grid__cell--span-5">
								<p>{item.neo_reference_id}</p>
								<p>{item.absolute_magnitude_h}</p>
								<p>{item.estimated_diameter.feet.estimated_diameter_max}</p>
								<p>{item.estimated_diameter.kilometers.estimated_diameter_max}</p>
								</div>
								<div class="mdc-layout-grid__cell--span-1"></div>
								<div class="mdc-layout-grid__cell--span-1"></div>
								<div class="mdc-layout-grid__cell--span-10 jplUrl_link">
								<a href={item.nasa_jpl_url} target="_blank"><Button variant="contained" color="primary">JPL Url</Button></a>
								</div>
								<div class="mdc-layout-grid__cell--span-1"></div>
								</div>
								</div>
								</div>
								);
							})}
					</div>
				</div>
			);
		}
		else{
			return(
			<div>
				<h2>Sorry no data found</h2>
			</div>
			);
		}
	}
}

export default viewAll;