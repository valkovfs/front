import {useState,useEffect} from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import api from "../api/api";

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const resgiterAcc = () => {
    api.post('auth/register', {
        "fullName": name,
        "email": email,
        "password": password
    }).then(data => console.log(data))
    }

    return (
        <div>
            <Head>
                <title>Kids-it - Программирование для детей</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div className="request">

                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={() => resgiterAcc()}> Login</button>

            </div>

        </div>
    )
}
