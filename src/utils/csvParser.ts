export function parseCSV(csv: string): string[][] {
  return csv
    .trim()
    .split('\n')
    .map(line => line.split(',').map(cell => cell.trim()));
}

export function csvToObjects<T>(csv: string): T[] {
  const rows = parseCSV(csv);
  const headers = rows[0];
  const data = rows.slice(1);

  return data.map(row => {
    const obj: any = {};
    headers.forEach((header, index) => {
      const value = row[index];
      // Convert to number if the header contains 'min' or 'max' and value is not empty
      if ((header.includes('min') || header.includes('max')) && value !== '') {
        obj[header] = parseFloat(value);
      } else {
        obj[header] = value || '';
      }
    });
    return obj as T;
  });
}