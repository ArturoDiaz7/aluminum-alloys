import React, { useState, useEffect } from 'react';
import { AlloyView } from '../data/types';
import { rangeDatabase, viewDatabase } from '../data/database';

interface SearchByChemistryProps {
  onResults: (alloys: AlloyView[]) => void;
}

const ELEMENTS = [
  { id: 'Al', label: 'Aluminum (Al)' },
  { id: 'Mg', label: 'Magnesium (Mg)' },
  { id: 'Zn', label: 'Zinc (Zn)' },
  { id: 'Mn', label: 'Manganese (Mn)' },
  { id: 'Cu', label: 'Copper (Cu)' },
  { id: 'Fe', label: 'Iron (Fe)' },
  { id: 'Si', label: 'Silicon (Si)' },
  { id: 'Ni', label: 'Nickel (Ni)' }
];

export function SearchByChemistry({ onResults }: SearchByChemistryProps) {
  const [tolerance, setTolerance] = useState(10);
  const [elements, setElements] = useState<Record<string, string>>({});

  const recalculateRange = (value: string, isMin: boolean, tolerance: number) => {
    const num = parseFloat(value);
    if (isNaN(num) || num === 0) return 0;
    if (num === 100) return 100;
    return isMin 
      ? num * (1 - tolerance / 100)
      : num * (1 + tolerance / 100);
  };

  useEffect(() => {
    if (Object.keys(elements).length === 0) {
      onResults([]);
      return;
    }

    const recalculatedRanges = rangeDatabase.map(alloy => ({
      ...alloy,
      "Al - min": recalculateRange(alloy["Al - min"], true, tolerance),
      "Al - max": recalculateRange(alloy["Al - max"], false, tolerance),
      "Mg - min": recalculateRange(alloy["Mg - min"], true, tolerance),
      "Mg - max": recalculateRange(alloy["Mg - max"], false, tolerance),
      "Zn - min": recalculateRange(alloy["Zn - min"], true, tolerance),
      "Zn - max": recalculateRange(alloy["Zn - max"], false, tolerance),
      "Mn - min": recalculateRange(alloy["Mn - min"], true, tolerance),
      "Mn - max": recalculateRange(alloy["Mn - max"], false, tolerance),
      "Cu - min": recalculateRange(alloy["Cu - min"], true, tolerance),
      "Cu - max": recalculateRange(alloy["Cu - max"], false, tolerance),
      "Fe - min": recalculateRange(alloy["Fe - min"], true, tolerance),
      "Fe - max": recalculateRange(alloy["Fe - max"], false, tolerance),
      "Si - min": recalculateRange(alloy["Si - min"], true, tolerance),
      "Si - max": recalculateRange(alloy["Si - max"], false, tolerance),
      "Ni - min": recalculateRange(alloy["Ni - min"], true, tolerance),
      "Ni - max": recalculateRange(alloy["Ni - max"], false, tolerance),
    }));

    let filteredAlloys = recalculatedRanges;

    Object.entries(elements).forEach(([element, value]) => {
      if (!value) return;
      
      const numValue = parseFloat(value);
      if (isNaN(numValue)) return;

      filteredAlloys = filteredAlloys.filter(alloy => {
        const minKey = `${element} - min` as keyof typeof alloy;
        const maxKey = `${element} - max` as keyof typeof alloy;
        const min = parseFloat(String(alloy[minKey]));
        const max = parseFloat(String(alloy[maxKey]));
        return numValue >= min && numValue <= max;
      });
    });

    const matchingAlloys = viewDatabase.filter(alloy =>
      filteredAlloys.some(filtered => filtered.ALEACION === alloy.ALEACION)
    );

    onResults(matchingAlloys);
  }, [elements, tolerance, onResults]);

  // Rest of the component remains the same
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="tolerance" className="block text-sm font-medium text-gray-700 mb-1">
          Selecciona la tolerancia
        </label>
        <select
          id="tolerance"
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={tolerance}
          onChange={(e) => setTolerance(Number(e.target.value))}
        >
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ELEMENTS.map(({ id, label }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type="number"
              id={id}
              step="0.01"
              min="0"
              max="100"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={elements[id] || ''}
              onChange={(e) => setElements(prev => ({ ...prev, [id]: e.target.value }))}
              placeholder="Enter value..."
            />
          </div>
        ))}
      </div>
    </div>
  );
}