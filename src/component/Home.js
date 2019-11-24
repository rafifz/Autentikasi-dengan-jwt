import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export class Home extends Component {
    remove=()=>{
        localStorage.removeItem('token')
    }
    render() {
        if(localStorage.getItem('token') === null){
            return <Redirect to='/' />
        }
        return (
            <div>
                    HOME ALONE
                    <form onSubmit={this.remove}>
                    <button type='submit' > Log out </button>
                    </form>
                    
            </div>
        )
    }
}

export default Home
