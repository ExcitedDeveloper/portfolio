import React, { ReactElement } from 'react'
import { Project } from '../../types/Project'
import { GitHubIcon, ExternalLinkIcon } from '../Icons'
import useWindowSize, { Size } from '../../hooks/useWindowSize'
import { MOBILE_BREAKPOINT } from '../../utils/constants'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): ReactElement => {
  const windowSize: Size = useWindowSize()
  const isDesktop =
    windowSize.width === undefined || windowSize.width >= MOBILE_BREAKPOINT

  return (
    <li className="project-portfolio">
      <div className="project-content">
        <div>
          <p className="project-overline">Featured Project</p>
          <h3 className="project-title">
            {project.liveUrl
              ? (
              <a
                href={project.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.title}
              </a>
                )
              : (
                  project.title
                )}
          </h3>
          <div className="project-description">
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
          <ul className="project-tech-list">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            <a
              href={project.githubUrl}
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                aria-label="External Link"
                className={`external ${
                  project.id === 'weather' ? 'weather-external' : ''
                }`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
      </div>
      {isDesktop && (
        <div className="project-image">
          <div className="image-wrapper image-wrapper-constrained img">
            <div
              style={{
                maxWidth: project.maxWidth ?? '43.75rem',
                display: 'block'
              }}
            >
              <img
                alt={project.imageAlt}
                src={project.imageSrc}
                style={{
                  maxWidth: '100%',
                  display: 'block',
                  position: 'static'
                }}
              />
            </div>
          </div>
        </div>
      )}
      {!isDesktop && (
        <div
          className="project-image project-image-mobile"
          style={{
            backgroundImage: `url("${project.imageSrc}")`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            gridColumn: '1/-1'
          }}
        ></div>
      )}
    </li>
  )
}

export default ProjectCard
