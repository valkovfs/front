import Link from 'next/link'

export default function ProjectPage({id, name, description, img, technologies, sourceLink, pageLink, status}) {


    return (
        <>
            <div key={id} className="projects_content">
                <Link href={'/projects/'}><a className="projects_goback">Link</a></Link>
                <div>
                    <img className="projects_image" src={img} alt={name}/>
                </div>
                <div>

                    <h2 className="projects_name">{name}</h2>
                    <h3 className="projects_description">{description}</h3>
                    <h3 className="projects_technologies">{technologies}</h3>
                    <div className="projects_links">
                        <a className="projects_link" href={pageLink} target="_blank"> App demo.</a>
                        <a className="projects_link" href={sourceLink} target="_blank"> Source Code.</a>
                    </div>
                </div>
            </div>
        </>
    )
}