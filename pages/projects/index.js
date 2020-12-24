import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Router from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Header from "../../components/header/Header";
import jwtClear from "../../redux/actionCreators/jwtClear";
import {LoadableContext} from "next/dist/next-server/lib/loadable-context";
import CustomLoader from "../../components/Loader";
import Menu from "../../components/menu/Menu";

export default function index({requests}) {
    const jwtToken = useSelector(state => state.jwtReducer[0])
    const setJwt = useDispatch()

    const signOut = async () => {
        await setJwt(jwtClear())
        Router.push('/')
    }
    useEffect(() => {
        console.log(requests)
    })

    const projectsBlock = () => (
        <div></div>
    )



    return (
        <div>
            <Header
                request={true}
                signout={false}
                signin={true}
                func={signOut}
                home={true}/>
            <div className="container">
                <Menu/>
            </div>
            <div>{requests.map(data => (
                <div>{data.name}</div>
            ))}</div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/api/requests')
    const data = await res.json()

        console.log(data[1])

    return {
        props: {
            requests: data
        }
    }
}
