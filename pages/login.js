import {useState, useEffect} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Header from "../components/header/Header";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import jwtSave from "../redux/actionCreators/jwtActionCreator";
import Loader from 'react-loader-spinner';
import Main from "../components/main/Main";
import Menu from "../components/menu/Menu";
import CustomLoader from "../components/Loader";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    const setJwt = useDispatch();

    useEffect(() => {
        if (jwtToken !== '') {
            Router.push('/admin')
        }
    }, [jwtToken])


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true)
        }, 500);
        return () => clearTimeout(timer);
    });

    const checkLogin = () => {
        axios.post('http://localhost:5000/auth/sign_in', {
            "email": email,
            "password": password
        }).then(async (data) => {
            if (data && data.data.token)
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
                            <div className="request">

                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <button onClick={checkLogin}> Login</button>

                            </div>
                            <Menu/>
                        </div>
                    </div>
                    :
                    <CustomLoader />
                }
            </>
        </div>
    )
}
