import { csvToObjects } from '../utils/csvParser';
import { AlloyRange, AlloyView } from './types';
import rangeCSV from './rangeDatabase.csv?raw';
import viewCSV from './viewDatabase.csv?raw';

export const rangeDatabase = csvToObjects<AlloyRange>(rangeCSV);
export const viewDatabase = csvToObjects<AlloyView>(viewCSV);