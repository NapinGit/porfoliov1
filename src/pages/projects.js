import { projectData } from '../components/ProjectData/Data';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                <a href={project.appLink}><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects;