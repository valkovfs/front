import {useState,useEffect} from 'react'
import {useSelector} from "react-redux";
import Head from 'next/head'
import axios from 'axios'

export default function index() {
    const jwtToken = useSelector(state => state.JWT_TOKEN)
    console.log(jwtToken)
    useEffect(() => {
        console.log(jwtToken)
    })
    return (
        <div>
            admin
        </div>
    )
}
