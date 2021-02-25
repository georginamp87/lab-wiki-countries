import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'


export default class CountriesList extends Component {
    
    render() {
        console.log(this.props)
        const {countries} = this.props

        return (
            {
                countries.map((country, index) => {
                    return <div key={index}>
                    <Link to={`/:${country.alpha3Code}`}>{country.name}</Link>
                            </div>
                        })
            }      
        )
    }
}

