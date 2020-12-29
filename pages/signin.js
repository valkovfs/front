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

export default function Signin() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jwtToken, setJwtToken] = useState('');
    const [img , setImg] = useState()
    const setJwt = useDispatch();

    useEffect(() => {
        if (jwtToken) {
            Router.push('/admin/projects')
        }
    }, [jwtToken])


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
        }).then(async (data) => {
            if (data && data.data.token)
                console.log(data)
            await setJwt(jwtSave(data.data.token))
            await setJwtToken(data.data.token)
            setIsLoading(true)
            Router.push('/admin/projects')
            setIsLoading(false)
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

                                    <input className="signin_inputs-input" type="text" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <input className="signin_inputs-input" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <div className="signin_inputs-button" onClick={checkLogin}>Sign-in</div>
                                </div>

                            </div>
                            <Menu/>
                            <img className="signin_img" src={dev} alt="Developer"/>
                    </div>
                    :
                    <CustomLoader />
                }
            </>
        </div>
    )
}
