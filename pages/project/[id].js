import {useRouter} from 'next/router'
import Link from 'next/link'
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import ProjectPage from "../../components/project/ProjectPage";
import {useEffect, useState} from "react";
import CustomLoader from "../../components/Loader";

const Project = ({project}) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(true)
        }, 1000);
        return () => clearTimeout(timer);
    });

    const router = useRouter()
    const {id} = router.query
    const {name, description, img, technologies, sourceLink, pageLink, status} = project
    console.log(router)
    console.log(project)

    return (
        <>
            <Header/>
            <Menu/>
            {isLoading ?
                <>
                    <Link href={`/projects/`}> Go back</Link>
                    <ProjectPage
                        id={id}
                        name={name}
                        description={description}
                        img={img}
                        technologies={technologies}
                        sourceLink={sourceLink}
                        pageLink={pageLink}
                    />
                </>
                : <CustomLoader/>}

        </>
    )
}

export async function getServerSideProps(context) {
    const {id} = context.query
    const res = await fetch(`${process.env.API_KEY}api/projects/${id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            project: data
        }
    }
}

export default Project