import {useState, useEffect} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import Header from "../components/header/Header";
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import jwtSave from "../redux/actionCreators/jwtActionCreator";
import Menu from "../components/menu/Menu";
import CustomLoader from "../components/Loader";
import dev from '../styles/img/dev.png'
import api from '../api/api'
import Image from 'next/image'
import developer from '../public/img/2842680.png'

export default function Signin(key, value) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    const [img, setImg] = useState()
    const [statusOk, setStatusOk] = useState(false)
    const [statusBad, setStatusBad] = useState(false)
    const setJwt = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            Router.push('/admin/projects')
        }
    }, [localStorage.getItem('token')])


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true)
        }, 500);
        return () => clearTimeout(timer);
    });

    const checkLogin = () => {
        api.post(`/auth/sign_in`, {
            "email": email,
            "password": password
        }).then((data) => {
            console.log(data)
            if (data.status === 200) {
                setIsLoading(false)
            }
            setJwt(jwtSave(data.data.token))
            setJwtToken(data.data.token)
            localStorage.setItem('token', data.data.token)
        }).catch((err) => {
            if (err.response.status === 401) {
                setStatusBad(true)
            }
        })
    }

    return (
        <div>
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

                        <div className="signin">
                            <div className="signin_inputs">
                                <div className={statusBad ? "response_error" : "response_ok"}>Wrong E-mail or Password</div>
                                <input className={!statusBad ? "signin_inputs-input" : "signin_inputs-input error" } type="text" placeholder="e-mail" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                <input className={!statusBad ? "signin_inputs-input" : "signin_inputs-input error" }  type="password" placeholder="password"
                                       value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <div className="signin_inputs-button" onClick={checkLogin}>Sign-in</div>
                            </div>

                        </div>
                        <Menu/>
                        <div className="signin_img">
                            <Image src={developer} width={500} height={500}/>
                        </div>
                    </div>
                    :
                    <CustomLoader/>
                }
            </>
        </div>
    )
}
