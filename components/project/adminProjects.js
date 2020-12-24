import { useState, useEffect} from 'react'
import ProjectsList from "./projectsList";

export default function AdminProjects({projects}) {
    const [tabStatus, setTabStatus] = useState(0)

    return (
        <div>
            <div className="projects">
            <div className="projects_nav">
                <div className="projects_tab all" onClick={() => setTabStatus(0)}>Projects</div>
                <div className="projects_tab add" onClick={(() => setTabStatus(1))}>Add</div>
            </div>
            <div className="projects_content">
                {!tabStatus ?
                    <ProjectsList projects={projects}/>

                : <div></div>}
            </div>
            </div>
        </div>
    )
}