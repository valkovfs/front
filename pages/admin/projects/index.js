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
    const [image, setImage] = useState('');
    const [pageLink, setPageLink] = useState('');
    const [sourceLink, setSourceLink] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [status, setStatus] = useState('0');
    const [isLoading, setIsLoading] = useState(0)

    useEffect(() => {
        if (projects) {
            setIsLoading(1)
        } else {
            setIsLoading(0)
        }
    }, [projects])

    const sendRequests = () => {
        api.post(`api/projects`, {
            "name": name,
            "description": description,
            "img": image,
            "pageLink": pageLink,
            "sourceLink": sourceLink,
            "technologies": technologies,
            "status": status
        }).then(
            Router.push('/admin/projects')
        )
        setName('')
        setDescription('')
        setImage('')
        setPageLink('')
        setSourceLink('')
        setTechnologies('')
    }

    const deleteProject = (projectId) => {
        api.delete(`api/projects/${projectId}`)
        Router.push('/admin/projects')
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
           <div className="project_container">
               <div className="project_table">
                   {projects? projects.map(project => (
                       <div className="project_table-row" key={project._id} >
                           <div className="project_table-name">{project.name}</div>
                           <div className="project_table-id">{project._id}</div>
                           <button className="project_table-button" onClick={() => deleteProject(project._id)}>Delete</button>
                       </div>

                   )): <></>}
               </div>
               <div className="project_add"><div>
                   <div className="project_input">
                       Name
                       <input type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                       />
                   </div>

               </div>
                   <div className="project_input">
                       Description
                       <input type="text"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                       />
                   </div>
                   <div className="project_input">
                       Img
                       <input type="text"
                              value={image}
                              onChange={(e) => setImage(e.target.value)}
                       />
                   </div>
                   <div className="project_input">
                       Technolgies
                       <input type="text"
                              value={technologies}
                              onChange={(e) => setTechnologies(e.target.value)}
                       />
                   </div>
                   <div className="project_input">
                       Project Link
                       <input type="text"
                              value={pageLink}
                              onChange={(e) => setPageLink(e.target.value)}
                       />
                   </div>
                   <div className="project_input">
                       Source Code Link
                       <input type="text"
                              value={sourceLink}
                              onChange={(e) => setSourceLink(e.target.value)}
                       />
                   </div>



                   <div>
                       <button className="project_add-button" onClick={sendRequests}>Send</button>
                   </div></div>



            </div>
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


