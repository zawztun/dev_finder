export interface UserData {
  status: number;
  data: {
    avator_url: string;
    blog: string;
    location: string;
    name: string;
    login: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
    created_at: string;
    twitter_username: string;
    bio: string;
  };
}
