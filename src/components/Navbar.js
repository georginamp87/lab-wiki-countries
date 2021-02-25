import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-text">
                    <a className="navbar-brand" href="/">WikiCountries</a>
                </span>
            </nav>
        )
    }
}
