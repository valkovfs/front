import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Router from 'next/router'
import Head from 'next/head'
import Link from "next/link";
import axios from 'axios'
import Header from "../../components/header/Header";
import jwtClear from "../../redux/actionCreators/jwtClear";
import {LoadableContext} from "next/dist/next-server/lib/loadable-context";
import CustomLoader from "../../components/Loader";
import Menu from "../../components/menu/Menu";

export default function index({projects}) {
    const [isLoading, setIsLoading] = useState(0)
    const jwtToken = useSelector(state => state.jwtReducer[0])
    const setJwt = useDispatch()


    useEffect(() => {
        if (projects) {
            const timer = setTimeout(() => {
                setIsLoading(true)
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsLoading(0)
        }
    }, [projects])

    const signOut = async () => {
        await setJwt(jwtClear())
        Router.push('/')
    }


    return (
        <>
            <Head>
                <title>VALKOV.DEV</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <>
            <Header
                request={true}
                signout={false}
                signin={true}
                func={signOut}
                home={true}/>
            <div className="container">
                <Menu/>
            </div>
                <>
                    {isLoading ?
                        <div className="projects">{projects.map(data => (
                            data ?
                                <div className="projects_block">
                                    <img src={data.img} className="projects_block-img" alt="Screen"/>
                                    <div className="projects_block-info">
                                        <p className="projects_block-name">{data.name}</p>

                                        <Link href={`/project/[id]`} as={`project/${data._id}`}><button className="projects_block-button">Details</button></Link>
                                    </div>
                                </div> : <></>
                        ))}
                        </div> : <CustomLoader/>
                    }
            </>

            </>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.API_KEY}api/projects`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            projects: data
        }
    }
}
