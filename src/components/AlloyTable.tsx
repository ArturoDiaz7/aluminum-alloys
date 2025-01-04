import React from 'react';
import { AlloyView } from '../data/types';

interface AlloyTableProps {
  alloys: AlloyView[];
}

export function AlloyTable({ alloys }: AlloyTableProps) {
  if (alloys.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No alloys found matching your criteria
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Alloy</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Al</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Mg</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Zn</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Mn</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Cu</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Fe</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Si</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/9">Ni</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {alloys.map((alloy) => (
            <tr key={alloy.ALEACION} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{alloy.ALEACION}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Al || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Mg || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Zn || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Mn || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Cu || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Fe || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Si || '-'}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alloy.Ni || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}