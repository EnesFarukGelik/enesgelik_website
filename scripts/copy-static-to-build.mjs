/**
 * Cloudflare Pages "Build output directory: build" için statik dosyaları build/ altına kopyalar.
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const out = path.join(root, "build");

const TOP_LEVEL = ["index.html", "robots.txt", "js", "public"];

await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(out, { recursive: true });

for (const name of TOP_LEVEL) {
  const src = path.join(root, name);
  try {
    await fs.access(src);
  } catch {
    console.warn("copy-static-to-build: atlandı (yok):", name);
    continue;
  }
  const dest = path.join(out, name);
  await fs.cp(src, dest, { recursive: true });
}

console.log("copy-static-to-build: build/ hazır");
