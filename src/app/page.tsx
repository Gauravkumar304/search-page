'use client';
import { useState } from 'react';
import SearchBox from '../components/SearchBox';

interface DataItem {
  id: number;
  title: string;
  category: string;
}

const Home: React.FC = () => {
  const data: DataItem[] = [
    { id: 1, title: 'How to learn React', category: 'education' },
    { id: 2, title: 'Top 10 Tech Gadgets', category: 'tech' },
    { id: 3, title: 'Healthy Living Tips', category: 'lifestyle' },
    { id: 4, title: 'JavaScript Best Practices', category: 'education' },
  ];

  const [filteredResults, setFilteredResults] = useState<DataItem[]>(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded shadow-lg max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Search Page
        </h1>
        <SearchBox data={data} setFilteredResults={setFilteredResults} />
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Results:</h2>
          <ul className="space-y-2">
            {filteredResults.length > 0 ? (
              filteredResults.map((item) => (
                <li key={item.id} className="p-3 border rounded bg-gray-50">
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">Category: {item.category}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
