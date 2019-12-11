import React from 'react';
import logo from './sun.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      weatherInfo: []
    }
  }
  
  componentWillMount() {
    fetch('https://samples.openweathermap.org/data/2.5/forecast/hourly?q=Berlin,us&appid=b6907d289e10d714a6e88b30761fae22')
      .then(res => res.json())
      .then((result) => this.setState({
        weatherInfo: result
    }, () => console.log({ weatherInfo: this.state.weatherInfo })))
  }
  
  componentDidMount() {
    
  }
  
  renderSimpleCard() {
    return (
      <div class="container">
      <div class="row">
        <div class="col">
          <div class="weather-card one">
            <div class="top">
              <div class="wrapper">
                <div class="mynav">
                  <a href="javascript:;"><span class="lnr lnr-chevron-left"></span></a>
                  <a href="javascript:;"><span class="lnr lnr-cog"></span></a>
                </div>
                <h1 class="heading">Clear night</h1>
                <h3 class="location">Dhaka, Bangladesh</h3>
                <p class="temp">
                  <span class="temp-value">20</span>
                  <span class="deg">0</span>
                  <a href="javascript:;"><span class="temp-type">C</span></a>
                </p>
              </div>
            </div>
            <div class="bottom">
              <div class="wrapper">
                <ul class="forecast">
                  <a href="javascript:;"><span class="lnr lnr-chevron-up go-up"></span></a>
                  <li class="active">
                    <span class="date">Yesterday</span>
                    <span class="lnr lnr-sun condition">
                      <span class="temp">23<span class="deg">0</span><span class="temp-type">C</span></span>
                    </span>
                  </li>
                  <li>
                    <span class="date">Tomorrow</span>
                    <span class="lnr lnr-cloud condition">
                      <span class="temp">21<span class="deg">0</span><span class="temp-type">C</span></span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  render() {
    return (
      <div>{this.renderSimpleCard()}</div>
    );
  }
  
  
}

export default App;
