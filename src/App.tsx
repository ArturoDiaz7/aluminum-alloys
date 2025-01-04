import React, { useState } from 'react';
import { SearchByName } from './components/SearchByName';
import { SearchByChemistry } from './components/SearchByChemistry';
import { AlloyTable } from './components/AlloyTable';
import { AlloyView } from './data/viewDatabase';
import { BeakerIcon, TagIcon } from 'lucide-react';

function App() {
  const [mode, setMode] = useState<'name' | 'chemistry'>('name');
  const [results, setResults] = useState<AlloyView[]>([]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Aluminum Alloys Database
          </h1>
          
          <div className="inline-flex rounded-md shadow-sm mb-8" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
                mode === 'name'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setMode('name')}
            >
              <TagIcon className="inline-block w-4 h-4 mr-2" />
              Input Alloy Name
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
                mode === 'chemistry'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setMode('chemistry')}
            >
              <BeakerIcon className="inline-block w-4 h-4 mr-2" />
              Input Alloy Chemistry
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          {mode === 'name' ? (
            <SearchByName onResults={setResults} />
          ) : (
            <SearchByChemistry onResults={setResults} />
          )}
        </div>

        <AlloyTable alloys={results} />
      </div>
    </div>
  );
}

export default App;