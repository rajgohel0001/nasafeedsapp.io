import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "material-components-web/dist/material-components-web.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './home.css';
import Swal from 'sweetalert2';
var moment = require('moment');

class home extends Component{

	state = {active:false};
    constructor(props){
      super(props)
      var today = new Date(),
      date = moment(today).format("YYYY-MM-DD");

      this.state = {
        element_count: '',
        date: date,
        startValue:'',
        endValue:'',
        array: undefined,
        isLoaded: false,
        pickerDate: new Date(),
        list: [],
        show: Boolean
      }

      this.handleClick = this.handleClick.bind(this);
      this.handleChangeEnd = this.handleChangeEnd.bind(this);
      this.dateChange = this.dateChange.bind(this);
    }

    componentDidMount() {
      fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date="+this.state.date+"&end_date="+this.state.date+"&api_key=xhrfa56HkJT1KaOvi7fCWcN1sCAJM9eyDJp5zWrU")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        var data = res;
        this.setState({
          isLoaded: true,
          array: data,
          // list: [...data.near_earth_objects,this.state.list]
        })
        console.log(this.state.array);
        // console.log(this.state.list);
      })
    }

    handleChangeEnd(event){  
      this.setState({endValue: event.target.value});
      console.log("end");
    }
    dateChange(date){
      this.setState({
        pickerDate: date
      });
      console.log(this.state.pickerDate);
      var datepicker = moment(this.state.pickerDate).add(1,'days').format("YYYY-MM-DD");
      console.log(datepicker);
    }

    handleClick(){
      const pattern =/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
      if(this.state.endValue && pattern.test(this.state.endValue)){
        fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date="+this.state.endValue+"&end_date="+this.state.endValue+"&api_key=xhrfa56HkJT1KaOvi7fCWcN1sCAJM9eyDJp5zWrU")
        .then(response => response.json())
        .then(res => {
          if(res.code == 400){
            Swal.fire({
             title: 'Please Enter Correct Date',
             type: 'warning',
           })
          }
          else{  
          console.log(res);
          var data = res;
          this.setState({
            isLoaded: true,
            array: data,
            date:this.state.endValue
          })
          }
          console.log(this.state.array);
        // console.log("Date: ",this.state.pickerDate);
      })
        console.log('success')
      }
      else if(this.state.endValue == ""){
        Swal.fire({
          title: 'Please Enter Date',
          text: 'Ex:-2019-01-01', 
          type: 'warning',
        })
      }
      else{
        Swal.fire({
          title: 'Please Enter Correct Date Format',
          text: 'Ex:-2019-01-01', 
          type: 'warning',
        })
      }
    }
	render (){
		const { isLoaded,array } = this.state;
		console.log("DATA of nasa======>",this.state.array, this.state.date);
		if (!isLoaded) {
        return (
          <center><div class="loader"></div></center>
        )
      }
      else if(isLoaded && this.state.array.element_count!==0){
        return(
          <div class="home_content">
          <div class="mdc-layout-grid">
          <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-2">
          <TextField
          id="standard-dense"
          label="Date: YYYY-MM-DD"
          margin="dense"
          onChange={this.handleChangeEnd}
          />
          </div>
          <div class="mdc-layout-grid__cell--span-2 btn">
          <Button variant="contained" color="primary" onClick={this.handleClick}>
          Find Object
          </Button>
          </div>
          </div>
          <p>Near Earth Objects: {this.state.array.element_count}</p>
          <p>Date: {this.state.date}</p>
          <div class="mdc-layout-grid__inner">
          {array.near_earth_objects[this.state.date].map((item,index)=>{
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
                        <p><b>Velocity:</b></p>
                        <p><b>Magnitude:</b></p>
                        <p><b>Velocity (Km/Sec):</b></p>
                        <p><b>Diameter (feet):</b></p>
                        <p><b>Diameter (Km):</b></p>
                        <p><b>Velocity (Km/Hr):</b></p>
                      </div>
                      <div class="mdc-layout-grid__cell--span-5">
                        <p>{item.neo_reference_id}</p>
                        <p>{item.close_approach_data[0].relative_velocity.kilometers_per_second}</p>
                        <p>{item.absolute_magnitude_h}</p>
                        <p>{item.close_approach_data[0].relative_velocity.kilometers_per_second}</p>
                        <p>{item.estimated_diameter.feet.estimated_diameter_max}</p>
                        <p>{item.estimated_diameter.kilometers.estimated_diameter_max}</p>
                        <p>{item.close_approach_data[0].relative_velocity.kilometers_per_hour}</p>
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
              )
          })}
          </div>
          </div> 
          </div>
          )
      }else{
        return (
          <html>
          <head></head>
          <body>
          <div class="mdc-layout-grid">
          <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-3">
          <TextField
          id="standard-dense"
          label="Enter date: YYYY-MM-DD"
          margin="dense"
          onChange={this.handleChangeEnd}
          />
          </div>
          <div class="mdc-layout-grid__cell--span-2">
          <Button variant="contained" color="primary" onClick={this.handleClick}>
          Find Object
          </Button>
          </div>
          </div>
          <p>Total Objects: {this.state.array.element_count}</p>
          <p>Date: {this.state.date}</p>
          <div class="paper"><b>Sorry No Objects Found</b></div>
          </div> 
          </body>
          </html>
          )
      	}
	}
}

export default home;