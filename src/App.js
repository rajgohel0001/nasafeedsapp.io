import React,{ Component } from 'react';
// import logo from './logo.svg';
import nasaLogo from './images/nasa-logo.svg';
import footerlogo from './images/cneos_logo.png';
import instagramlogo from './images/instagram.png';
import facebooklogo from './images/facebook.png';
import twitterlogo from './images/twitter.png';
import youtubelogo from './images/youtube.png';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import './App.css';
// import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "material-components-web/dist/material-components-web.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import apod from './components/apod_page/apod';
import viewAll from './components/view_all_page/viewAll';
import home from './components/home_page/home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Tabs } from "@yazanaabed/react-tabs";
// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "react-tabs/style/react-tabs.css"; 

var moment = require('moment');
// function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }


  class App extends Component{

    render(){
        return(
          <div class="body_content">
          <div class="mdc-layout-grid">
          <div class="mdc-layout-grid__inner header">
          <div class="mdc-layout-grid__cell--span-5">
          <img src={nasaLogo} className="App-logo" alt="logo" />
          </div>
          <div class="mdc-layout-grid__cell--span-7">
          <p className='title'>Find Near Earth Objects</p>
          </div>
          </div>
          <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-12">
          <Router>
          <Switch>
          <div>
          <Tabs
          activeTab={{
            id: "home"
          }}
          >
          <Tabs.Tab id="home" title="Home">
          <div style={{ padding: 10 }}>
          <Route component={home} />
          </div>
          </Tabs.Tab>
          <Tabs.Tab id="apod" title="Apod Page">
          <div style={{ padding: 10 }}>
          <Route component={apod} />
          </div>
          </Tabs.Tab>
          <Tabs.Tab id="view_all" title="View All">
          <div style={{ padding: 10 }}>
          <Route component={viewAll} />
          </div>
          </Tabs.Tab>
          </Tabs>
          </div>
          </Switch>
          </Router>
          </div>
          </div>
          </div>
          <footer>
            <div class="mdc-layout-grid">
              <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell--span-4"><center><img src={footerlogo} className="footerlogo"></img></center></div>
                <div class="mdc-layout-grid__cell--span-4"><p><a href="https://www.nasa.gov/" target="_blank">Find more @ NASA</a></p></div>
                <div class="mdc-layout-grid__cell--span-4">
                  <center>Follow Us On</center>
                  <div className="following"> 
                    <ul>
                      <li><a href="https://www.facebook.com/nasa/" target="_blank"><img src={facebooklogo}></img></a></li>
                      <li><a href="https://www.instagram.com/nasa/" target="_blank"><img src={instagramlogo}></img></a></li>
                      <li><a href="https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=nasa" target="_blank"><img src={twitterlogo}></img></a></li>
                      <li><a href="https://www.youtube.com/user/NASAtelevision?sub_confirmation=1" target="_blank"><img src={youtubelogo}></img></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          </div>
          )
      }
   }

export default App;