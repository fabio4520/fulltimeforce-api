import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  private readonly githubApiUrl = 'https://api.github.com';

  constructor() { }

  async listCommits(owner: string, repo: string, per_page: number = 30) {
    const url = `${this.githubApiUrl}/repos/${owner}/${repo}/commits?per_page=${per_page}`;
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    // Extract the data from the response
    const responseData = response.data;

    // Create an empty object to store grouped data
    const groupedData = {};

    // Iterate through the responseData array and group commits by date
    responseData.forEach((commit) => {
      const date = commit.commit.author.date;
      const dateFormatted = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      if (!groupedData[dateFormatted]) {
        groupedData[dateFormatted] = [];
      }

      groupedData[dateFormatted].push(commit);
    });

    // Convert the grouped data into the desired format
    const formattedData = Object.keys(groupedData).map((date) => ({
      date,
      commits: groupedData[date],
    }));

    return formattedData;
  }
}
