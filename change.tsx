 // his.state.items.map((item) => {
    //            return  (<li key={item.near_earth_objects}>
    //                              {item.near_earth_objects}                 
    //                           </li>)
    //              })}
    //         </ul>
    //         </div>
    //         )
    //(122) <p>{this.state.date}</p>
    // <ul>
    //         {array.map(function(array, index){
      //           return <li key={ index }>{array.near_earth_objects}</li>;
      //         })}
//         </ul>

// <div> {
//           this.state.array.links.map((details,index)=>{
//               return <div>
//                 <h1>{details.lin}</h1>
//               </div>
//           })}
//           </div>
// <ul>      
//           {
//             this.state.array.near_earth_objects["2019-05-09"].map((item, index)=>{
//               return (<li key={ item.id }>{item.name}</li>)
//             })
//           }
//           </ul>  

//(159) <div class="mdc-layout-grid__inner">
//           <div class="mdc-layout-grid__cell--span-2">
//           <Button variant="contained" color="primary" onClick={this.handleClickNext}>
//           Next Day
//           </Button>
//           </div>
//           <div class="mdc-layout-grid__cell--span-2">
//           <Button variant="contained" color="primary" onClick={this.handleClickPrev}>
//           Previous Day
//           </Button>
//           </div>
//           <div class="mdc-layout-grid__cell--span-2">
//           <Button variant="contained" color="primary" onClick={this.handleClickSelf}>
//           Today
//           </Button>
//           </div>
//           </div>

//(88) handleClickNext(){
//       axios.get(this.state.array.links.next)
//       .then(response => console.log(response.data))
//       .then(response => response.json())
//       .then(response => {
//         console.log(response.data);
//         var data = response.data;
//         this.setState({
//           isLoaded: true,
//           array: data,
//         })
//         console.log(this.state.array);
//       })
//       console.log('next day')
//     }
//     handleClickPrev(){
//       axios.get(this.state.array.links.prev)
//       .then(response => this.setState({element_count: response.data.element_count}))
//       console.log('previous day')
//     }
//     handleClickSelf(){
//       axios.get(this.state.array.links.self)
//       .then(response => this.setState({element_count: response.data.element_count}))
//       console.log('today')
//     }
// handleChangeStart(event){
//       this.setState({startValue: event.target.value});
//       console.log("start");
//     }

//(50) this.handleClickNext = this.handleClickNext.bind(this);
//       this.handleClickPrev = this.handleClickPrev.bind(this);
//       this.handleClickSelf = this.handleClickSelf.bind(this);
//        this.handleChangeStart = this.handleChangeStart.bind(this);
//(141) <p>Element count date wise: {this.state.element_count}</p>

//(112) <div class="mdc-layout-grid__cell--span-2">
//           <TextField
//           id="standard-dense"
//           label="Start date"
//           margin="dense"
//           value={this.state.value}
//           onChange={this.handleChangeStart}
//           />
//           </div>

//(132) <div className = "tab">
//           <table>
//             <tr>
//               <th>Neo Ref Id</th>
//               <th>Name of objects</th>
//               <th>Magnitude</th>
//               <th>Estimated Diameter (feet)</th>
//               <th>Estimated Diameter (Km)</th>
//               <th>Velocity (Km/Hr)</th>
//               <th>Velocity (Km/Sec)</th>
//             </tr>
//             {array.near_earth_objects["2019-05-11"].map((item,index)=>{
//               return (
//                 <tr>
//                 <td key={ item.id }>{item.neo_reference_id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.absolute_magnitude_h}</td>
//                 <td>{item.estimated_diameter.feet.estimated_diameter_max}</td>
//                 <td>{item.estimated_diameter.kilometers.estimated_diameter_max}</td>
//                 <td>{item.close_approach_data[0].relative_velocity.kilometers_per_hour}</td>
//                 <td>{item.close_approach_data[0].relative_velocity.kilometers_per_second}</td>
//                 </tr>
//                 )
//             })
//           }
//           </table>
//           </div>

//(132) <DatePicker
//           dateFormat="yyyy-MM-dd"
//           selected={this.state.pickerDate}
//           onChange={this.dateChange}
//           />
//(55) dateChange(date){
//       this.setState({
//         pickerDate: date
//       });
//       console.log(this.state.pickerDate);
//       var datepicker = moment(this.state.pickerDate).add(1,'days').format("YYYY-MM-DD");
//       console.log(datepicker);
//     }
//home.js(115) <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
//                 <div class="mdc-card__media mdc-card__media--16-9 demo-card__media backgroundimg"></div>
//                 </div>
// 


// ========================= For Routing ================================
// <Router>
//           <ul>
//           <li><Button><Link to={'/'} class="active">Home</Link></Button></li>
//           <li><Button><Link to={'/apod'} class="active">Apod page</Link></Button></li>
//           <li><Button><Link to={'/viewAll'} class="active">View All</Link></Button></li>
//           </ul>
//           <hr />
//           <Switch>
//           <Route exact path='/' component={home} />
//           <Route path='/apod' component={apod} />
//           <Route path='/viewAll' component={viewAll} />
//           </Switch>
//           </Router>