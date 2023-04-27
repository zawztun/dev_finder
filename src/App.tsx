import { octokit } from "./client/Octokit";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Card from "./components/Card";
import type { UserData } from "./components/Card";

function App() {
  const [result, setResult] = useState<UserData | null>();
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
        setResult(data);
      } catch {
        setResult(null);
      }
    }
  };

  return (
    <>
      <div className="grid bg-slate-100 dark:bg-bg-bg dark:text-gray-400 h-screen place-items-center font-mono overflow-y-auto  ">
        <div className="flex flex-col gap-4 w-full min-h-[500px] mt-4 mx-auto my-auto lg:max-w-[700px]">
          {/* header here */}
          <Header />
          <SearchBox
            keyword={keyword}
            setKeyword={setKeyword}
            handleSearch={handleSearch}
          />
          {result && <Card data={result}></Card>}
        </div>
      </div>
    </>
  );
}

export default App;
