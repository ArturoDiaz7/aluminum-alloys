import React, { useState, useEffect } from 'react';
import { AlloyView } from '../data/types';
import { viewDatabase } from '../data/database';

interface SearchByNameProps {
  onResults: (alloys: AlloyView[]) => void;
}

export function SearchByName({ onResults }: SearchByNameProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.trim() === '') {
      onResults([]);
      return;
    }

    const filtered = viewDatabase.filter(alloy => 
      alloy.ALEACION.toLowerCase().startsWith(search.toLowerCase())
    );

    if (filtered.length === 0) {
      onResults([{ 
        ALEACION: 'Not in my DB',
        Al: '-',
        Mg: '-',
        Zn: '-',
        Mn: '-',
        Cu: '-',
        Fe: '-',
        Si: '-',
        Ni: '-'
      }]);
    } else {
      onResults(filtered);
    }
  }, [search, onResults]);

  return (
    <div className="w-full max-w-md">
      <label htmlFor="alloy-name" className="block text-sm font-medium text-gray-700 mb-1">
        Nombre de la aleación
      </label>
      <input
        type="text"
        id="alloy-name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter alloy name..."
      />
    </div>
  );
}