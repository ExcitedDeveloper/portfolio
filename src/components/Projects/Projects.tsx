import React, { ReactElement } from 'react'
import ProjectCard from '../ProjectCard'
import { projects } from '../../data/projects'
import './Projects.css'

const Projects = (): ReactElement => {
  return (
    <section id="projects">
      <h2 className="numbered-heading projects-heading">
        Some Things I&apos;ve Built
      </h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
