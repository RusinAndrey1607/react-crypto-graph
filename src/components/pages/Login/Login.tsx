import React, { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../..";
import { Header } from "../../Header/Header";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import google from './../../../assets/images/icon/google.svg'
import { signInGoogle } from "../../../utils/signInWithGoogle";
const Login = React.memo(() => {

    const { auth } = useContext(Context)
    const [error, setError] = useState('')
    const history = useHistory()

    const signInWithGoogle = useCallback(() => {
        signInGoogle(auth)
    }, [auth])

    const callBack = useCallback((email: string, password: string) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(() => history.push('/'))
            .catch((data) => {
                // @ts-ignore
                setError(data.code)
            })
    }, [auth, history])

    return (
        <div className="">
            <Header />
            <section className="login">
                <div className="container">
                    <div className="login__inner">
                        <LoginForm signInWithGoogle={signInWithGoogle} callBack={callBack} error={error} />
                    </div>
                </div>
            </section>
        </div>
    )
})

type LoginFormType = {
    callBack: (email: string, password: string) => void
    error: string
    signInWithGoogle: () => void

}

type FormType = {
    email : string
    password: string
}
const LoginForm: React.FC<LoginFormType> = React.memo(({ signInWithGoogle, callBack, error }) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data: FormType) => {
        callBack(data.email, data.password)
        reset()
    }
    return (
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="login__form-title">Enter To account</h1>
            <label className="login__form-label"><b>Email</b></label>
            <input
                className="login__form-input"
                {...register("email", {
                    required: "The Field is required",
                    minLength: { value: 10, message: "Min Lenght of email is 10 symbols" }
                })}
                placeholder="Enter Email"

            />
            <div>
                {errors.email && <p style={{
                                color:"red",
                                margin:"10px 0",
                            }}>{errors.email.message || "Error"}</p>}
            </div>
            <label className="login__form-label">
                <b>Password</b>
            </label>
            <input
                {...register("password", {
                    required: "The Field is required",
                    minLength: { value: 8, message: "Min Lenght of password is 8 symbols" }
                })}
            type="password"
            className="login__form-input"
            placeholder="Enter Password"

            />
                            {errors.password && <p style={{
                                color:"red",
                                margin:"10px 0",
                            }}>{errors.password.message || "Error"}</p>}

            <div className="inner">
                <img className="google_icon" src={google} alt="Sign with google" onClick={signInWithGoogle} />
                <button className="login__form-btn btn" type="submit">Enter</button>
            </div>

            {!!error && <span style={{ marginTop: "30px", color: "red", fontSize: "16px", textAlign: "center" }}>{error}</span>}

            <Link className="login__form-create" to="/registration">
                Not account?
            </Link>
        </form>
    )
})
export default Login