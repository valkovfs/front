import {useState,useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Router from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Header from "../../components/header/Header";
import jwtClear from "../../redux/actionCreators/jwtClear";
import {LoadableContext} from "next/dist/next-server/lib/loadable-context";
import CustomLoader from "../../components/Loader";
import Menu from "../../components/menu/Menu";

export default function index({ requests }) {
    const jwtToken = useSelector(state => state.jwtReducer[0])
    const setJwt = useDispatch()
    const [reqData, setRequestData] = useState([])
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [status, setStatus] = useState('0')


    const sendRequests = () => {
        axios.post(`${process.env.API_KEY}api/requests`, {
            "name" : name,
            "number" : number,
            "status" : status
        })
            .then((request) => {
                console.log(jwtToken)
                console.log(request)
                setRequestData(request)
            })
    }

    const signOut = async () => {
        await setJwt(jwtClear())
        Router.push('/')
    }

    useEffect(() => {

        if(jwtToken) {
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
                        <div className="container">
                            <Menu/>
                        </div>
                      <div>
                          Number
                        <input type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div>
                        Name
                        <input type="text"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div><button onClick={sendRequests}>Send</button></div>
                </div>
                : <CustomLoader/>
            }
        </div>
    )
}


