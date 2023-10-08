import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  private readonly githubApiUrl = 'https://api.github.com';

  constructor() { }

  async listCommits(owner: string, repo: string) {
    const response = await axios.get(
      `${this.githubApiUrl}/repos/${owner}/${repo}/commits`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    return response.data;
  }
}
