import React, { useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
};

export default function SearchBox({
  keyword,
  setKeyword,
  handleSearch,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef && inputRef.current?.focus();
  }, []);
  return (
    <>
      <div className="px-4">
        <div className="dark:bg-bg-bd dark:text-gray-400 p-2 rounded-md bg-bg-card shadow shadow-gray-800/20 text-gray-900">
          <div className="flex md:text-2xl gap-4">
            <div className="flex items-center px-2 ">
              <AiOutlineSearch className="w-[25px] h-[25px] md:w-[45px] md:h-[45px] text-sky-600" />
            </div>
            <input
              id="input"
              ref={inputRef}
              value={keyword}
              type="text"
              placeholder="Github User Search"
              className="outline-none dark:bg-bg-bd w-full "
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          {/* <button
            onClick={handleSearch}
            className="p-4 max-w-max bg-sky-600 md:text-xl font-light rounded-md"
          >
            Search
          </button> */}
        </div>
      </div>
    </>
  );
}
