import {useState,useEffect} from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('')

    const postRequest = () => {
        axios.post(`${process.env.API_KEY}api/requests`, {
            "name": name,
            "number": mobileNumber,
            "status": 1,
            "createdOn": new Date()
        })
    }

    return (
        <div>
            <Head>
                <title>Kids-it - Программирование для детей</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div className="request">

            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
            <button onClick={postRequest}> Отправить заяку</button>

            </div>

        </div>
    )
}
