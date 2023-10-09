import { Controller, Get, Param, Query } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) { }

  @Get('/repos/:owner/:repo/commits')
  async listCommits(
    @Param('owner') owner: string,
    @Param('repo') repo: string,
    @Query('per_page') per_page: number,
  ) {
    return this.githubService.listCommits(owner, repo, per_page);
  }
}
