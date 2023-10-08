import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) { }

  @Get('respos/:owner/:repo/commits')
  async listCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string
  ) {
    return this.githubService.listCommits(owner, repo);
  }
}
