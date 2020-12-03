import {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Main from "../components/main";
import Menu from "../components/header/menu";

export default function Home() {


    return (
        <>
            <Head>
                <title>Kids-it - Программирование для детей</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header
                request={false}
                signout={true}
                signin={false}
                home={true}
            />

            <div className="container">
                <Main/>
            </div>

            <Menu/>
        </>
    )
}
