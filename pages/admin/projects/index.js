import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Router from 'next/router'
import Head from 'next/head'
import axios from 'axios'
import Header from "../../../components/header/Header";
import jwtClear from "../../../redux/actionCreators/jwtClear";
import {LoadableContext} from "next/dist/next-server/lib/loadable-context";
import CustomLoader from "../../../components/Loader";
import Menu from "../../../components/menu/Menu";

export default function index({requests}) {
    const jwtToken = useSelector(state => state.jwtReducer[0]);
    const setJwt = useDispatch();
    const [reqData, setRequestData] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pageLink, setPageLink] = useState('');
    const [sourceLink, setSourceLink] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [status, setStatus] = useState('0');


    const sendRequests = () => {
        axios.post('http://localhost:5000/api/projects', {
            "name": name,
            "description": description,
            "pageLink": pageLink,
            "sourceLink": sourceLink,
            "technologies": technologies,
            "status": status
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
    return (
        <div>
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
                <div>
                    Name
                    <input type="text"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    Description
                    <input type="text"
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    Technolgies
                    <input type="text"
                           value={technologies}
                           onChange={(e) => setTechnologies(e.target.value)}
                    />
                </div>
                <div>
                    Project Link
                    <input type="text"
                           value={pageLink}
                           onChange={(e) => setPageLink(e.target.value)}
                    />
                </div>
                <div>
                    Source Code Link
                    <input type="text"
                           value={sourceLink}
                           onChange={(e) => setSourceLink(e.target.value)}
                    />
                </div>



                <div>
                    <button onClick={sendRequests}>Send</button>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/api/requests')
    const data = await res.json()

    console.log(data[1])

    return {
        props: {
            projects: data
        }
    }
}


