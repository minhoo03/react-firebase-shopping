import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import firebase from '../firebase'
import md5 from 'md5'

export default function RegisterPage() {

    const { register, watch, formState:{errors}, handleSubmit } = useForm({mode: 'onChange'})
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    // const password = useRef()
    // password.current = watch('password')

    console.log(watch('email', 'name', 'password'));

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            let createUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            firebase.auth().signOut()

            // console.log(createUser)

            await createUser.user.updateProfile({
                displayName: data.name,
                photoURL: `http://gravatar.com/avatar/${md5(createUser.user.email)}?d=identicon`
            })

            await firebase.database().ref('users').child(createUser.user.uid).set({
                displayName: createUser.user.displayName,
                photoURL: createUser.user.photoURL
            })

            setLoading(false)
        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)
            
            setTimeout(() => {
                setErrorMsg('')
            }, 5000)

        }
    }

    return (
        <div className="auth_wrapper">
            <h3>Register</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i}) }/>
                {errors.email && errors.email.type === 'required' && <p>Email field is required</p>}
                <br/>

                <input placeholder="name" type="text" name="name" {...register('name', { required: true, maxLength: 10 })} />
                {errors.name && errors.name.type === 'required' && <p>Name field is required.</p>}
                {errors.name && errors.name.type === 'maxLength' && <p>Your input exceed maximum length.</p>}
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
