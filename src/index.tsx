import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import './style.scss'
import "./_media.scss"
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
export const app = initializeApp(firebaseConfig)
type ContextType = {
  auth: typeof auth
  firestore: typeof firestore
}
const auth = getAuth()
const firestore = getFirestore()

export const Context = createContext(null as unknown as ContextType)
ReactDOM.render(
  <BrowserRouter>
    <Context.Provider value={{
      auth,
      firestore,
    }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
