import { useState, useEffect } from 'react'

const PORTFOLIO_NAME = 'portfolio'

export interface UseGitHubStats {
  stars: number
  forks: number
}

const useGitHubStats = (): UseGitHubStats => {
  const [stars, setStars] = useState(0)
  const [forks, setForks] = useState(0)

  useEffect(() => {
    const fetchGitHubStats = async (): Promise<any> => {
      const resp = await fetch(
        'https://api.github.com/users/ExcitedDeveloper/repos'
      )

      const repos = await resp.json()

      const portfolios = repos.filter(
        (repo: { name: string }) => repo.name === PORTFOLIO_NAME
      )

      if (!portfolios || portfolios.length <= 0) {
        console.error('useGitHubStats: Did not find portfolio')
        return
      } else if (portfolios && portfolios.length > 1) {
        console.error('useGitHubStats: Found more than one portfolio')
        return
      }

      setStars(portfolios[0].stargazers_count)
      setForks(portfolios[0].forks_count)
    }

    fetchGitHubStats().catch(console.error)
  }, [])

  return {
    stars,
    forks
  }
}

export default useGitHubStats
