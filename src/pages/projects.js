// import { render } from 'react-dom';
import { projectData } from '../components/ProjectData/Data';


function ifdata(project) {
  if (project.appLink)
  return (
    <a href={project.appLink}><i className="fas fa-link fa-xl"></i></a>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">

      <a href={project.gitHubLink}><i className="fa-regular fa-folder-open folder-icon"></i></a>
              <div className="small-icons">
                {/* <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a> */}
              {ifdata(project)}
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