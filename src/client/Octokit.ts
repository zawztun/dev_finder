import { Octokit } from "octokit";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo

const githubToken = import.meta.env.REACT_APP_GITHUB_TOKEN;
export const octokit = new Octokit({ auth: githubToken });
