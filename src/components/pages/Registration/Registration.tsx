import React, { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import { useForm } from "react-hook-form";
import { Header } from "../../Header/Header";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { signInGoogle } from "../../../utils/signInWithGoogle";

export const Registration = React.memo(() => {
    const [error, setError] = useState('')
    const { auth } = useContext(Context)
    const history = useHistory()

    const signInWithGoogle = useCallback(() => {
        signInGoogle(auth)
    }, [auth])

    const callBack = useCallback((email: string, password: string, name: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                // @ts-ignore
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: "https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png",
                })

                // @ts-ignore
                sendEmailVerification(auth.currentUser).then(() => {
                    alert("Confirm email")
                    return history.push('/login')
                })
               
                setError('')
                // @ts-ignore
            }).catch((data) => {
                // @ts-ignore
                setError(data.customData._tokenResponse.error.message)
            })


    }, [auth, history])

    return (
        <div className="">
            <Header />
            <section className="registration">
                <div className="container">
                    <div className="login__inner">
                        <RegForm signInWithGoogle={signInWithGoogle} callBack={callBack} error={error} />
                    </div>
                </div>
            </section>
        </div>
    )
})

type RegFormType = {
    callBack: (email: string, password: string, name: string) => void
    error: string
    signInWithGoogle: () => void
}

type FormType = {
    email: string
    password: string
    name: string
}
const RegForm: React.FC<RegFormType> = React.memo(({ callBack, signInWithGoogle, error }) => {
    const [localError, setLocalError] = useState('')
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data: FormType) => {
        callBack(data.email, data.password, data.name)
        reset()
    }
    useEffect(() => {
        switch (error) {
            case "EMAIL_EXISTS":
                setLocalError("Email Already exists use another or login with this")
                break
            default:
                setLocalError(error)
        }
    }, [error])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
            <h1 className="login__form-title">Create an account</h1>
            <label className="login__form-label"><b>Name</b></label>
            <input
                className="login__form-input"
                type="text"
                {...register("name", {
                    required: "This Field is required",
                    minLength: { value: 3, message: "Min Lenght of name is 3 symbols" }
                })}
                placeholder="Enter Name"

            />
            <div>
                {errors.name && <p style={{
                    color: "red",
                    margin: "10px 0",
                }}>{errors.name.message || "Error"}</p>}
            </div>
            <label className="login__form-label"><b>Email</b></label>
            <input
                className="login__form-input"
                type="text"
                placeholder="Enter Email"
                {...register("email", {
                    required: "This Field is required",
                    minLength: { value: 8, message: "Min Lenght of email is 8 symbols" }
                })}
            />
            <div>
                {errors.email && <p style={{
                    color: "red",
                    margin: "10px 0",
                }}>{errors.email.message || "Error"}</p>}
            </div>
            <label className="login__form-label">
                <b>Password</b>
            </label>
            <input
                className="login__form-input"
                type="password"
                placeholder="Enter Password"
                {...register("password", {
                    required: "This Field is required",
                    minLength: { value: 8, message: "Min Lenght of password is 8 symbols" }
                })}
            />
            <div>
                {errors.password && <p style={{
                    color: "red",
                    margin: "10px 0",
                }}>{errors.password.message || "Error"}</p>}
            </div>
            <span className="login__form-create" onClick={signInWithGoogle} >
                Or Login with Google
            </span>
            <button type="submit" disabled={!isValid} className="login__form-btn btn">Enter</button>
            {error && <span style={{ marginTop: "30px", color: "red", fontSize: "16px", textAlign: "center" }}>{localError}</span>}
        </form>
    )
})

export default Registration