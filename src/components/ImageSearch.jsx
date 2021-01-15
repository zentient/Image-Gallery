import React, { useState } from "react";

const ImageSearch = ({ setSearch }) => {
  // search term state
  const [text, setText] = useState("");

  // setting the term to the state when hitting submit
  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b border-b-2 border-indigo-500 py-2">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search Image..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
