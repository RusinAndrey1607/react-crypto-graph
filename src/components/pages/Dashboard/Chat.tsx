import React, { useCallback, useContext, useState } from "react";
import { Context } from "../../..";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Preloader } from "../../Preloader/Preloader";
import { useForm } from "react-hook-form";

export const Chat = React.memo(() => {
    const { firestore } = useContext(Context)
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    const q = query(collection(firestore, "messages"), orderBy("createdAt", 'desc'), limit(200))
    const [messages] = useCollectionData(q)
    
    const sendMessage = useCallback(async (message: string) => {
        await addDoc(collection(firestore, "messages"), {
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            text: message,
            createdAt: serverTimestamp()
        }).catch(console.log)

    }, [user, firestore])
    return  messages ? (
        <div className="chat" id="messages">
            <div className="container">
                <div className="chat__inner">
                    <div className="chat__info-title">
                        <h6 className="chat__title">Chat Room</h6>
                        <p className="chat__paragraph">
                            Here you can express your thoughts on cryptocurrencies
                        </p>
                    </div>
                    <div className="chat__list">
                        <div className="chat__messages">
                            {/* @ts-ignore */}
                            {messages && messages.map((message) => <ChatMessage createdAt={message.createdAt} text={message.text} photoURL={message.photoURL} displayName={message.displayName} key={message.createdAt + message.uid} />)}
                        </div>
                    </div>
                    {user?.emailVerified ? <ChatForm sendMessage={sendMessage} /> : <h2 style={{ textAlign: "center" }}> To send messages you need to login</h2>}

                </div>
            </div>
        </div>
    ) : <Preloader />
})

type ChatMessageType = {
    displayName: string
    createdAt: number
    photoURL: string
    text: string
}
const ChatMessage: React.FC<ChatMessageType> = React.memo(({ photoURL, displayName, createdAt, text }) => {
    return (
        <div className="chat__message">
            <div className="chat__message-info">
                <img src={photoURL} className="chat__message-image" alt="ava" />

                <span className="chat__message-name">{displayName}</span>
                <span className="chat__message-date"></span>
            </div>
            <p className="chat__message-paragraph">
                {text}
            </p>
        </div>
    )
})

type ChatFormType = {
    sendMessage: (message: string) => void
}

type FormType = {
    message: string
}
const ChatForm: React.FC<ChatFormType> = React.memo(({ sendMessage }) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        
    } = useForm({
        mode: "onChange"
    })
    const [isTimeOut, setIsTimeOut] = useState(false)
    const onSend = useCallback((data: FormType) => {
        sendMessage(data.message)
        setIsTimeOut(true)
        setTimeout(() =>{
            setIsTimeOut(false)
        },10000)
        reset()
    }, [sendMessage,reset])
    
    return (
        <form className="chat__form" onSubmit={handleSubmit(onSend)}>
            <textarea
                cols={30}
                rows={10}
                {...register("message",{
                    required:"If you want to send message you need to type it",
                    minLength:{value:20 ,message:"Min length of message is 20 symbols"},
                    maxLength:{value:400 , message:"Max length of message is 400 symbols"},
                })}
                className="chat__form-print"
                placeholder="Start typing here"
            ></textarea>
            <div>
                {errors.message && <p style={{
                                color:"red",
                                margin:"10px 0",
                            }}>{errors.message.message || "Error"}</p>}
            </div>
            <button disabled={isTimeOut || (!isValid && isTimeOut)} className="chat__form-btn btn" type="submit" >
                Send
            </button>
            <div>
                {isTimeOut && <p style={{
                                color:"red",
                                margin:"10px 0",
                            }}>Please wait a couple seconds before sending message!</p>}
            </div>
        </form>
    )
})

