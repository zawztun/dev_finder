import { octokit } from "./client/Octokit";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Card from "./components/Card";
import type { UserData } from "./types";

function App() {
  const [data, setData] = useState<UserData | null>();
  const [keyword, setKeyword] = useState("");

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      try {
        const data = await octokit.request(`GET /users/${keyword}`, {
          username: keyword,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
        setData(data);
      } catch {
        setData(null);
      }
    }
  };

  return (
    <>
      <div className="grid h-screen overflow-y-auto font-mono bg-slate-100 dark:bg-bg-bg dark:text-gray-400 place-items-center ">
        <div className="flex flex-col gap-4 w-full min-h-[500px] mt-4 mx-auto my-auto lg:max-w-[700px]">
          {/* header here */}
          <Header />
          <SearchBox
            keyword={keyword}
            setKeyword={setKeyword}
            handleSearch={handleSearch}
          />
          {data && <Card data={data}></Card>}
        </div>
      </div>
    </>
  );
}

export default App;
