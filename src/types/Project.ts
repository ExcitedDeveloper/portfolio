export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  imageSrc: string
  imageAlt: string
  maxWidth?: string
}
