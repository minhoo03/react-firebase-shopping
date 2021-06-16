import React from 'react'
import { useForm } from "react-hook-form"

export default function LoginPage() {

    const { register, watch, formState:{errors}, handleSubmit } = useForm({mode: 'onChange'})

    console.log(watch('email', 'password'));
    const onSubmit = data => console.log(data)


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

                <input type="submit" />
            </form>
        </div>
    )
}
