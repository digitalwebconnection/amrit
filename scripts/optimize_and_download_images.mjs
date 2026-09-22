import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Ensure target directories exist
const dirs = [
  'public/images/projects',
  'public/images/testimonials',
  'public/images/products',
  'public/hero/products'
];

for (const d of dirs) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

// 2. Download external images and save as WebP
const externalImages = [
  // Recent Projects
  {
    url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200",
    dest: "public/images/projects/project_commercial_rooftop.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200",
    dest: "public/images/projects/project_substation_33kv.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200",
    dest: "public/images/projects/project_industrial_shed.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    dest: "public/images/projects/project_warehouse_kit.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    dest: "public/images/projects/project_dlms_metering.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&q=80&w=1200",
    dest: "public/images/projects/project_inverter_scada.webp"
  },

  // Testimonials
  {
    url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/testimonials/client_galbale.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/testimonials/client_shrikhande.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/testimonials/client_hingne.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/testimonials/client_bhattad.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/testimonials/client_medisetti.webp"
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/testimonials/client_govarthan.webp"
  },

  // Leadership Director fallback
  {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    dest: "public/images/leadership_director.webp"
  }
];

console.log("=== 1. DOWNLOADING & CONVERTING EXTERNAL IMAGES ===");
for (const item of externalImages) {
  try {
    console.log(`Downloading: ${item.dest}...`);
    const res = await fetch(item.url);
    if (!res.ok) {
      console.error(`Failed to fetch: ${item.url} status: ${res.status}`);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await sharp(buffer)
      .webp({ quality: 80 })
      .toFile(item.dest);
    const size = fs.statSync(item.dest).size;
    console.log(`✓ Saved ${item.dest} (${Math.round(size / 1024)} KB)`);
  } catch (err) {
    console.error(`Error downloading ${item.dest}:`, err.message);
  }
}

// 3. Convert all local images to WebP
console.log("\n=== 2. CONVERTING LOCAL IMAGES TO WEBP ===");
const localDirs = [
  'public/images',
  'public/images/products',
  'public/hero/products'
];

let totalOriginalSize = 0;
let totalWebpSize = 0;

for (const dir of localDirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const srcPath = path.join(dir, file);
      const baseName = path.basename(file, ext);
      const destPath = path.join(dir, `${baseName}.webp`);

      try {
        const originalSize = fs.statSync(srcPath).size;
        totalOriginalSize += originalSize;

        await sharp(srcPath)
          .webp({ quality: 80 })
          .toFile(destPath);

        const webpSize = fs.statSync(destPath).size;
        totalWebpSize += webpSize;

        const savings = Math.round((1 - webpSize / originalSize) * 100);
        console.log(`✓ ${srcPath} (${Math.round(originalSize / 1024)} KB) -> ${destPath} (${Math.round(webpSize / 1024)} KB) [Saved ${savings}%]`);
      } catch (err) {
        console.error(`Error converting ${srcPath}:`, err.message);
      }
    }
  }
}

console.log("\n=== CONVERSION COMPLETE ===");
console.log(`Total Original: ${Math.round(totalOriginalSize / 1024)} KB`);
console.log(`Total WebP: ${Math.round(totalWebpSize / 1024)} KB`);
console.log(`Overall Savings: ${Math.round((1 - totalWebpSize / totalOriginalSize) * 100)}% reduction!`);
