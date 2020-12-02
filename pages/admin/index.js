import {useState,useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Router from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Header from "../../components/header/Header";
import jwtClear from "../../redux/actionCreators/jwtClear";

export default function index() {
    const jwtToken = useSelector(state => state.jwtReducer[0])
    const setJwt = useDispatch()
    const getRequests = () => {
        axios.get('http://localhost:5000/api/requests')
            .then((request) => {
                console.log(jwtToken)
                console.log(request)
            })
    }

    const signOut = async () => {
        await setJwt(jwtClear())
        Router.push('/')
    }

    useEffect(() => {

        if(jwtToken) {
            getRequests()
            console.log(jwtToken)
        } else {
            Router.push('/login')
        }
    }, [jwtToken])
    return (
        <div>
            {jwtToken
                ? <div>
                    <Header
                        request={true}
                        signout={false}
                        signin={true}
                        func={signOut}
                        home={true}/>
                </div>
                : <div>Loading</div>
            }
        </div>
    )
}
