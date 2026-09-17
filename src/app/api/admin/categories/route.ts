import { NextRequest, NextResponse } from 'next/server';
import { getCategories, createCategory } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const medicalSystem = searchParams.get('medicalSystem') || undefined;

    const categories = await getCategories(medicalSystem);
    return NextResponse.json({
      success: true,
      total: categories.length,
      categories
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to fetch categories';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.title || !body.slug || !body.medicalSystem) {
      return NextResponse.json({ success: false, error: 'Missing required category fields (title, slug, medicalSystem)' }, { status: 400 });
    }

    const created = await createCategory({
      title: body.title,
      titleTa: body.titleTa || body.title,
      slug: body.slug.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
      medicalSystem: body.medicalSystem,
      description: body.description
    });

    return NextResponse.json({
      success: true,
      message: 'Category created successfully',
      category: created
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to create category';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
