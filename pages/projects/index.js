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

export default function index({projects}) {
    const [isLoading, setIsLoading] = useState(0)
    const jwtToken = useSelector(state => state.jwtReducer[0])
    const setJwt = useDispatch()


    useEffect(() => {
        if (projects) {
            setIsLoading(1)
        } else {
            setIsLoading(0)
        }
    }, [projects])

    const signOut = async () => {
        await setJwt(jwtClear())
        Router.push('/')
    }

    const projectsBlock = () => (
        <div></div>
    )

    console.log(process.env.API_KEY)



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
                        <div>{projects.map(data => (
                            !data.status ?
                                <div>
                                    <p>{data._id}</p>
                                    <p>{data.name}</p>
                                    <p>{data.description}</p>
                                    <p>{data.technologies}</p>
                                    <p>{data.pageLink}</p>
                                    <p>{data.sourceLink}</p>
                                </div> : <div></div>
                        ))}
                        </div> : <CustomLoader/>
                    }
            </>

            </>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_KEY}api/projectsx`)
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
