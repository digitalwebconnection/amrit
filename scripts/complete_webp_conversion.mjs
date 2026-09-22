import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const blogImages = [
  {
    url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/blogs/blog_1.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/blogs/blog_2.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1565439399435-010abfb9d4cf?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/blogs/blog_3.webp"
  }
];

if (!fs.existsSync('public/images/blogs')) {
  fs.mkdirSync('public/images/blogs', { recursive: true });
}

console.log("=== DOWNLOADING BLOG IMAGES ===");
for (const item of blogImages) {
  try {
    const res = await fetch(item.url);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      await sharp(buffer).webp({ quality: 80 }).toFile(item.dest);
      console.log(`✓ Saved ${item.dest} (${Math.round(fs.statSync(item.dest).size / 1024)} KB)`);
    } else {
      console.log(`Failed to fetch ${item.url}: ${res.status}`);
    }
  } catch (e) {
    console.error(`Error with ${item.dest}:`, e.message);
  }
}

// Convert directories
const dirsToConvert = [
  'public/images/services',
  'public/hero',
  'public',
  'src/assets'
];

console.log("\n=== CONVERTING REMAINING ASSETS TO WEBP ===");
let totalOrig = 0;
let totalNew = 0;

for (const dir of dirsToConvert) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const srcPath = path.join(dir, file);
      const stat = fs.statSync(srcPath);
      if (stat.isDirectory()) continue;
      
      const baseName = path.basename(file, ext);
      const destPath = path.join(dir, `${baseName}.webp`);

      try {
        const origSize = stat.size;
        totalOrig += origSize;

        await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
        const webpSize = fs.statSync(destPath).size;
        totalNew += webpSize;
        const saved = Math.round((1 - webpSize / origSize) * 100);
        console.log(`✓ ${srcPath} (${Math.round(origSize / 1024)} KB) -> ${destPath} (${Math.round(webpSize / 1024)} KB) [Saved ${saved}%]`);
      } catch (err) {
        console.error(`Error converting ${srcPath}:`, err.message);
      }
    }
  }
}

console.log("\n=== SUMMARY ===");
console.log(`Original: ${Math.round(totalOrig / 1024)} KB`);
console.log(`WebP: ${Math.round(totalNew / 1024)} KB`);
console.log(`Savings: ${Math.round((1 - totalNew / totalOrig) * 100)}%`);
