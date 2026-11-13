import './ProjectPage.css'
import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { NotFoundPage } from './NotFoundPage';
import { LightBoxComponent } from '../components/LightboxComponent'


export function ProjectPage({ projects }) {
  const [modal, setModal] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const project = projects.find(projectItem => projectItem.id === Number(params.projectId));
  if (!project) {
    return (
      <NotFoundPage />
    )
  }
  const { title, description, media, author, tags, location } = project;

  return (
    <main>
      <div className="project-wrapper">
        <h1>{title} Page</h1>
        <button onClick={() => {navigate(-1)}}>Go Back</button>
        <button onClick={() => setModal(prev => !prev)}>
          View Fullscreen
        </button>
        {media.map(({title, url}, index) => {
          return (
            <div
              key={index}
            >
              <img src={`${url}`} alt={`${title}`} />
              <span>{title}</span>
            </div>
          )
        })}
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Filmed by {author} in {location}</span>
        <span>{tags.join(', ')}</span>
      </div>
      
      <span>lightbox</span>
      <LightBoxComponent media={media} modal={modal} setModal={setModal} />
    </main>
  )
}