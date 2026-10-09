import { NextRequest, NextResponse } from 'next/server';
import { readFile, stat } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export const dynamic = 'force-dynamic';

function getMimeType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.webp':
      return 'image/webp';
    case '.avif':
      return 'image/avif';
    case '.svg':
      return 'image/svg+xml';
    case '.gif':
      return 'image/gif';
    case '.ico':
      return 'image/x-icon';
    default:
      return 'application/octet-stream';
  }
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathSegments } = await context.params;
    if (!pathSegments || pathSegments.length === 0) {
      return new NextResponse('Not Found', { status: 404 });
    }

    // Securely resolve disk path inside public/images
    const relativePath = path.join(...pathSegments);
    // Prevent directory traversal attacks
    if (relativePath.includes('..')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const fullPath = path.join(process.cwd(), 'public', 'images', relativePath);

    if (!existsSync(fullPath)) {
      return new NextResponse('Image Not Found', { status: 404 });
    }

    const fileStat = await stat(fullPath);
    if (!fileStat.isFile()) {
      return new NextResponse('Not a file', { status: 404 });
    }

    const fileBuffer = await readFile(fullPath);
    const mimeType = getMimeType(fullPath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400',
      },
    });
  } catch (err: unknown) {
    console.error('Dynamic image streaming error:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
