import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const slug = (formData.get('slug') as string | null)?.trim() || '';
    const customFileName = (formData.get('fileName') as string | null)?.trim() || '';

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Enforce 5MB max upload limit
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds maximum allowed limit of 5MB.' },
        { status: 400 }
      );
    }

    // Validate mime type
    const validMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif', 'image/avif'];
    if (!validMimes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type. Please upload a JPEG, PNG, WEBP, or SVG image.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    if (buffer.length > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, error: 'File content exceeds maximum allowed limit of 5MB.' },
        { status: 400 }
      );
    }

    // Determine target directory and filename
    let relativeDir = '/uploads/products';
    let targetDir = path.join(process.cwd(), 'public', 'uploads', 'products');

    if (slug) {
      const sanitizedSlug = slug.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
      relativeDir = `/images/products/${sanitizedSlug}`;
      targetDir = path.join(process.cwd(), 'public', 'images', 'products', sanitizedSlug);
    }

    // Ensure directory exists
    if (!existsSync(targetDir)) {
      await mkdir(targetDir, { recursive: true });
    }

    // Determine clean filename
    const ext = path.extname(file.name) || '.jpg';
    let safeName = customFileName 
      ? customFileName.replace(/[^a-zA-Z0-9_.-]/g, '_')
      : `img_${Date.now()}${ext.toLowerCase()}`;

    if (!safeName.endsWith(ext.toLowerCase())) {
      safeName += ext.toLowerCase();
    }

    const filePath = path.join(/*turbopackIgnore: true*/ targetDir, safeName);
    await writeFile(filePath, buffer);

    const publicUrl = `${relativeDir}/${safeName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      fileName: safeName,
      size: buffer.length,
      message: 'Image uploaded successfully'
    });
  } catch (error: unknown) {
    console.error('Image upload failed:', error);
    const errorMsg = error instanceof Error ? error.message : 'Server error while uploading image';
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}
