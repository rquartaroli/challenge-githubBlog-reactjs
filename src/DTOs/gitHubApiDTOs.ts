export type GitHubProfileDTO = {
  login: string,
  avatar_url: string,
  bio: string,
  html_url: string,
  name: string,
  company: string,
  followers: number,
}

export type GitHubIssuesRepository = {
  total_count: number,
  items: [
    {
      id: number,
      number: number,
      title: string,
      created_at: string,
      body: string,
    }
  ]
}

export type GitHubIssuePost = {
  html_url: string,
  title: string,
  login: string,
  comments: number,
  created_at: string,
  body: string,
}