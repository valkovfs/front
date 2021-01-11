import NoImage from '../../public/img/No_Image_Available.jpg'

export default function ProjectPage({id, name, description, img, technologies, sourceLink, pageLink, status}) {


    return (
        <>
            <div key={id} className="project_content">{/*
                <Link href={'/projects/'}><a className="projects_goback">Link</a></Link>*/}
                <div className="project_block-img">
                    {img
                        ? <img src={img} alt={name}/>
                        : <img src={NoImage} alt='No image'/>}

                </div>
                <div>

                    <h2 className="project_name">{name}</h2>
                    <h3 className="project_description">{description}</h3>
                    <h3 className="project_technologies">{technologies}</h3>
                    <div className="project_links">
                        {pageLink
                            ? <a className="project_link" href={pageLink} target="_blank"> App demo.</a>
                            : <></>}
                        <a className="project_link" href={sourceLink} target="_blank"> Source Code.</a>
                    </div>
                </div>
            </div>
        </>
    )
}