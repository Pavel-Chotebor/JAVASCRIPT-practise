import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username = "",
            password = "",
            kingdomName = ""
        }
    this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value } = event.target
          this.setState ({
              [name]: value
          })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        name="username"
                        type="text"
                        value="username"
                        placeholder="Username"
                        onChange={this.handleChange} >
                    </input>

                    <input 
                        name="password"
                        type="password"
                        value="password"
                        placeholder="Password"
                        onChange={this.handleChange} >
                    </input>

                    <input 
                        name="kingdomName"
                        type="text"
                        value="kingdomName"
                        placeholder="Kingdom name"
                        onChange={this.handleChange} >
                    </input>

                </form>
            </div>
        )
    }
}

export default Form