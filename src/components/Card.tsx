import { MdLocationOn } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { SiGithubactions } from "react-icons/si";

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
type Props = {
  data: UserData;
};

export default function Card({ data }: Props) {
  return (
    <div className="p-4 leading-8">
      <div className=" bg-bg-card rounded-md dark:bg-bg-bd dark:text-white w-full min-h-[350px] p-4 md:p-8 shadow shadow-gray-800/20">
        <div className=" flex flex-col lg:grid lg:grid-cols-[130px_1fr]  w-full mx-auto justify-center gap-x-8 lg:justify-between">
          <div className="flex  lg:contents gap-4 ">
            <div
              className=" bg-slate-600 border overflow-hidden grid place-items-center dark:bg-white
                        min-w-[100px] h-[100px] w-[100px] aspect-square rounded-full object-cover lg:w-full lg:h-full"
            >
              <img
                src="/github.jpg"
                // src={`${data.data.avator_url}s=200&v=4`}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="lg:flex lg:items-center">
              <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-2">
                <div>
                  <h1 className="text-2xl font-semibold dark:white">
                    {data.data.name}
                  </h1>
                  <span className="text-sky-400 ">@{data.data.login}</span>
                </div>
                <span className="md:text-[11px] mt-2 dark:text-gray-400 ">
                  {data.data.created_at}
                </span>
              </div>
            </div>
          </div>

          <div className="col-start-2 gap-4 ">
            <p className="text-sm leading-loose dark:text-gray-400 ">
              {data.data.bio}
            </p>
            <div className=" bg-slate-100 flex my-8 lg:mb-8 lg:my-6 justify-around dark:bg-bg-bg dark:text-gray-400 rounded-md py-4">
              <div className="flex flex-col items-center">
                <h2>Repo</h2>
                <span className="dark:text-white">
                  {data.data.public_repos}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <h2>Followers</h2>
                <span className="dark:text-white">{data.data.followers}</span>
              </div>
              <div className="flex flex-col items-center">
                <h2>Following</h2>
                <span className="dark:text-white">{data.data.following}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-4 col-start-2 md:flex-row md:gap-8 text-sm dark:text-gray-400 ">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 lg:gap-4 items-center ">
                <span>
                  <MdLocationOn className="w-[25px] h-[25px] lg:w-[22px] lg:h-[22px] md:w-[35px] md:h-[35px]" />
                </span>
                <p>{data.data.location}</p>
              </div>
              <div className="flex gap-2 lg:gap-4 items-center">
                <span>
                  <BiLink className="w-[25px] h-[25px] lg:w-[22px] lg:h-[22px] md:w-[35px] md:h-[35px]" />
                </span>
                <span>{data.data.blog}</span>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 lg:gap-4 items-center">
                <span>
                  <IoLogoTwitter className="text-sky-400 w-[25px] h-[25px] lg:w-[22px] lg:h-[22px] md:w-[35px] md:h-[35px]" />
                </span>
                <p>{data.data.twitter_username}</p>
              </div>
              <div className="flex gap-2 lg:gap-4 items-center">
                <span>
                  <SiGithubactions className="w-[25px] h-[25px] lg:w-[22px] lg:h-[22px] md:w-[35px] md:h-[35px]" />
                </span>
                <p>@{data.data.login}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
