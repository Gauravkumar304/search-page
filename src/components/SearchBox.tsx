'use client';
import { FC, useState } from 'react';

interface SearchBoxProps {
  data: { id: number; title: string; category: string }[];
  setFilteredResults: (results: { id: number; title: string; category: string }[]) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ data, setFilteredResults }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleSearch = () => {
    let results = data;

    if (searchTerm) {
      results = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter !== 'all') {
      results = results.filter((item) => item.category === filter);
    }

    setFilteredResults(results);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none"
      />
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="w-full p-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 mb-4"
      >
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </button>
      {showFilters && (
        <div className="mb-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="all">All</option>
            <option value="tech">Tech</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="education">Education</option>
          </select>
        </div>
      )}
      <button
        onClick={handleSearch}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
