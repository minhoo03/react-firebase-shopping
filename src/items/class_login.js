// class component

import React, { Component } from 'react'
import { useObserver } from 'mobx-react'
import { useForm } from "react-hook-form"
import firebase from '../firebase'
import { useHistory } from 'react-router-dom'

export class LoginPage2 extends Component {

    state = {
        errorMsg: '',
        loading: false
    }

    onSubmit = async (data) => {  
        data.preventDefault()

        try{
            this.setState({ loading: true })
            
            // console.log(data.target.email.value)
            await firebase.auth().signInWithEmailAndPassword(data.target.email.value, data.target.password.value)

            console.log('login')

            // this.props.history.push('/')

            this.setState({ loading: false })
        } catch(error) {
            this.setState({ errorMsg: error.message })
            this.setState({ loading: false })
            setTimeout(() => {
                this.setState({ errorMsg: '' })
            }, 5000);
        }
    }

    render() {

        return (
            <div className="auth_wrapper">
            <h3>Login</h3>

            <form onSubmit={this.onSubmit}>

                <input placeholder="email" type="email" name="email" />
                <br/>

                <input placeholder="password" type="password" name="password" />
                <br/>

                {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
                <input type="submit" disabled={this.state.loading} />
            </form>

        </div>
        )
    }
}

export default LoginPage2
