// main.ts — entrypoint for the Post the Meme, Win the Feed bounty.
// It copies POST.json from this repository into the grader's output
// directory. That is all it has to do: the house reads the X post itself.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const postPath = join(repoDir, "POST.json");

// Read the post file first and check it names an https post address,
// so a broken POST.json fails here instead of shipping a bad copy.
const post = JSON.parse(readFileSync(postPath, "utf8")) as { url?: unknown };
if (typeof post.url !== "string" || !post.url.startsWith("https://")) {
  throw new Error("POST.json must hold a url starting with https://");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postPath, join(outDir, "POST.json"));
