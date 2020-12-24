export default function ProjectPage({ name, description, img, technologies, sourceLink, pageLink, status }) {
    return (
        <div>
            <p>{name}</p>
            <img src={img} alt={name}/>
            {img}
            <p>{description}</p>
            <p>{technologies}</p>
            <p>{sourceLink}</p>
            <p>{pageLink}</p>
        </div>
    )
}