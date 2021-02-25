import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList.js'
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound.js'
import React, { Component } from 'react'
import CountryDetails from './components/CountryDetails'
import axios from 'axios'

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount(){
      axios.get('https://restcountries.eu/rest/v2/all')
          .then((response) => {
              this.setState({
                  countries: response.data
              })
          })
          .catch(() => {
              console.log('Error while getting countries')
          })
  }

  render() {
    const {countries} = this.state
    console.log(countries)
    return (
      <div className="App">
        <Navbar />
          <div className="container">
             <div className="row">
               <div className="col-5">
                  <div className="list-group"></div>
                    <CountriesList countries={countries}/>
                  </div>
                </div>
                <div className="col-5">
                  <Route path='/:country.alpha3Code' render={(routeProps) => {
                    return <CountryDetails countries={countries} {...routeProps} />
                  }} />
                </div>
              </div>
          </div>
    )
  }
}

export default App