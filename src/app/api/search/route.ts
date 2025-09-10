import { NextRequest, NextResponse } from 'next/server';
import sampleData from '../../constants/sample_data.json';

// Helper to get all types from the data
function getTypes(data: any[]): string[] {
  const types = new Set<string>();
  data.forEach(item => {
    if (item.type) types.add(item.type);
  });
  return Array.from(types);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q')?.toLowerCase() || '';
  const data = sampleData as any[];
  const types = getTypes(data);

  // Prepare result objects
  const results: Record<string, any[]> = {};
  const count: Record<string, number> = {};
  types.forEach(type => {
    results[type] = [];
    count[type] = 0;
  });

  if (!query) {
    // No search query, return empty results and count 0 for each type
    return NextResponse.json({ results, count });
  }

  // Filter and count for each type
  types.forEach(type => {
    const filtered = data.filter(
      item => item.type === type && item.name?.toLowerCase().includes(query)
    );
    results[type] = filtered;
    count[type] = filtered.length;
  });

  return NextResponse.json({ results, count });
}
