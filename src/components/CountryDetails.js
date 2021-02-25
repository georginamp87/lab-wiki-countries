import React, { Component } from 'react'
import axios from 'axios'

class CountryDetails extends Component {

    state = {
        country: {}
    }

    getCountry = () => {
        let code = this.props.match.params.code
        axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`)
            .then((response) => {
                let country = {
                    code: code,
                    name: response.data.name,
                    capital: response.data.capital,
                    area: response.data.area,
                    borders: response.data.borders,
                    flag: response.data.flag
                }

                this.setState({
                    country: country
                })
            })
    }

    componentDidMount(){
        this.getCountry()
    }

    componentDidUpdate(){
        // compare the new one with the one in state
        let code = this.props.match.params.code
        if (this.state.country.code !== code) {
            this.getCountry()
        }
        
    }


    render() {
        const {country: {name, capital, area, borders, flag} } = this.state
        console.log(this.props)
        return (
            <div className="col-7">
                <h1>{name}</h1><img src={flag}/>
                <table className="table">
                  <thead></thead>
                  <tbody>
                  <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {
                        borders.map((country, index) => {
                            return <li key={index}>
                            <Link to={`/:${country.alpha3Code}`}>{country.name}</Link>
                            </li>
                        })
                    }
                      {/* <li>{...borders}</li> */}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}

export default CountryDetails