import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const key = req.headers.get('x-api-key');

  if (key !== process.env.API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/secret'],
};
