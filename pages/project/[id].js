import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import ProjectPage from "../../components/project/ProjectPage";

const Project = ({project}) => {
    const router = useRouter()
    const { id } = router.query
    const { name, description, img, technologies, sourceLink, pageLink, status } = project
    console.log(router)
    console.log(project)

    return (
        <>
            <Header/>
            <Menu/>
            <Link href={`/projects/`}> Go back</Link>
            <ProjectPage
                id = {id}
                name={name}
                description={description}
                img={img}
                technologies={technologies}
                sourceLink={sourceLink}
                pageLink={pageLink}
            />
        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
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