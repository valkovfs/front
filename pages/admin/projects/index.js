import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Router from 'next/router'
import {useRouter} from "next/router";
import Head from 'next/head'
import axios from 'axios'
import Header from "../../../components/header/Header";
import jwtClear from "../../../redux/actionCreators/jwtClear";
import {LoadableContext} from "next/dist/next-server/lib/loadable-context";
import CustomLoader from "../../../components/Loader";
import Menu from "../../../components/menu/Menu";
import api from '../../../api/api'
import AdminProjects from "../../../components/project/adminProjects";

export default function index({projects}) {
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
        api.post(`api/projects`, {
            "name": name,
            "description": description,
            "pageLink": pageLink,
            "sourceLink": sourceLink,
            "technologies": technologies,
            "status": status
        })
    }

    const deleteProject = (projectId) => {
        api.delete(`api/projects/${projectId}`)

    }

    const signOut = async () => {
        await setJwt(jwtClear())
        Router.push('/')
    }
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
            <AdminProjects projects={projects}/>
           {/* <div>

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

                <div><p>Delete Project</p>
                    {projects? projects.map(project => (
                        <div>
                            <p>{project._id}</p>
                            <button onClick={() => deleteProject(project._id)}> Delete Project</button>
                        </div>

                    )): <></>}
                </div>
            </div>*/}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_KEY}api/projects`)
    const data = await res.json()

    console.log(data[1])

    return {
        props: {
            projects: data
        }
    }
}


