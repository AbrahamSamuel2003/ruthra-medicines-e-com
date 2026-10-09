import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

async function optimizeImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  
  // 1. Optimize ruthra-logo.png (Resize to 400px width with clean PNG compression)
  const logoPath = path.join(imagesDir, 'ruthra-logo.png');
  if (fs.existsSync(logoPath)) {
    const logoBuffer = await sharp(logoPath)
      .resize({ width: 360, withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(logoPath, logoBuffer);
    console.log(`Optimized ruthra-logo.png -> ${(logoBuffer.length / 1024).toFixed(1)} KB`);
  }

  // 2. Optimize ruthra-icon.png
  const iconPath = path.join(imagesDir, 'ruthra-icon.png');
  if (fs.existsSync(iconPath)) {
    const iconBuffer = await sharp(iconPath)
      .resize({ width: 256, withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(iconPath, iconBuffer);
    console.log(`Optimized ruthra-icon.png -> ${(iconBuffer.length / 1024).toFixed(1)} KB`);
  }

  // 3. Optimize app icon & favicon
  const appIcon = path.join(process.cwd(), 'src', 'app', 'icon.png');
  if (fs.existsSync(appIcon)) {
    const appIconBuffer = await sharp(appIcon)
      .resize({ width: 128, withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(appIcon, appIconBuffer);
    console.log(`Optimized src/app/icon.png -> ${(appIconBuffer.length / 1024).toFixed(1)} KB`);
  }

  const publicIcon = path.join(process.cwd(), 'public', 'icon.png');
  if (fs.existsSync(publicIcon)) {
    const publicIconBuffer = await sharp(publicIcon)
      .resize({ width: 128, withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(publicIcon, publicIconBuffer);
    console.log(`Optimized public/icon.png -> ${(publicIconBuffer.length / 1024).toFixed(1)} KB`);
  }
}

optimizeImages().catch(console.error);
