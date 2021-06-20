// function component

import React, { useState, Component } from 'react'
import { useObserver } from 'mobx-react'
import { useForm } from "react-hook-form"
import firebase from '../firebase'
import { useHistory } from 'react-router-dom'

export default function LoginPage() {

    let history = useHistory()

    const { register, watch, formState:{errors}, handleSubmit } = useForm({mode: 'onChange'})
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    console.log(watch('email', 'password'));
    
    const onSubmit = async (data) => {  
        try{
            setLoading(true)
            
            await firebase.auth().signInWithEmailAndPassword(data.email, data.password)

            console.log('login')

            history.push('/')

            setLoading(false)
        } catch(error) {
            setErrorMsg(error.message)
            setLoading(false)
            setTimeout(() => {
                setErrorMsg('')
            }, 5000);
        }
    }


    return (
        <div className="auth_wrapper">
            <h3>Login</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i}) }/>
                {errors.email && errors.email.type === 'required' && <p>Email field is required</p>}
                <br/>

                <input placeholder="password" type="password" name="password" {...register('password', { required: true, minLength: 7 })} />
                {errors.password && errors.password.type === 'required' && <p>Password field is required.</p>}
                {errors.password && errors.password.type === 'minLength' && <p>Your input exceed minimum length.</p>}
                <br/>

                {errorMsg && <p>{errorMsg}</p>}
                <input type="submit" disabled={loading} />
            </form>
        </div>
    )
}
