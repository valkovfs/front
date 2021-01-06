import {useState, useEffect} from 'react'
import Head from 'next/head'
import Header from "../components/header/Header";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Main from "../components/main/Main";
import Menu from "../components/menu/Menu";
import Loader from 'react-loader-spinner'
import CustomLoader from "../components/Loader";
import TypingText from "../components/main/TypingText";



export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true)
        }, 500);
        return () => clearTimeout(timer);
    });

    return (
        <>
            <Head>
                <title>VALKOV.DEV</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <>
                {isLoading
                    ? <div><Header
                        request={false}
                        signout={true}
                        signin={false}
                        home={true}
                    />

                        <div className="container">


                            <Main/>

                            <Menu/>
                        </div>
                    </div>
                    :
                    <CustomLoader />}
            </>
        </>
    )
}
