import {useState,useEffect} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Header from "../components/header/Header";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useSelector, useDispatch} from "react-redux";
import jwtSave from "../redux/actionCreators/jwtActionCreator";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [jwtToken, setJwtToken] = useState('')
    const setJwt = useDispatch()

    useEffect(() => {
      if (jwtToken !== '') {
          Router.push('/admin')
      }
    },[jwtToken])

    const checkLogin =  () => {
        axios.post('http://localhost:5000/auth/sign_in', {
            "email": email,
            "password": password
        }).then(async (data) => {
            if(data && data.data.token)
                console.log(data)
           await setJwt(jwtSave(data.data.token))
           await setJwtToken(data.data.token)
            Router.push('/admin')

        })
    }

    return (
        <div>
            <Head>
                <title>Kids-it - Программирование для детей</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header
                request={true}
                signout={true}
                signin={true}
                home={false}
            />
            <div className="request">

                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={checkLogin}> Login</button>

            </div>

        </div>
    )
}
