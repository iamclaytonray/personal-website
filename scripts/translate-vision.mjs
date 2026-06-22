// Pre-translates app/vision/messages/en.json into zh / th / ka via the DeepL
// Pro API and writes the result next to the source. Run once whenever the
// English copy changes:
//
//   node --env-file=.env scripts/translate-vision.mjs
//
// No runtime DeepL calls happen in the app — the generated JSON is committed
// and served statically. Hand-edit any translation that reads off.

import { readFile, writeFile } from "node:fs/promises";

const KEY = process.env.DEEPL_API_KEY;
if (!KEY) {
  console.error("Missing DEEPL_API_KEY (expected in .env).");
  process.exit(1);
}

// Pro keys use api.deepl.com; Free keys (suffixed ":fx") use api-free.deepl.com.
const ENDPOINT = KEY.endsWith(":fx")
  ? "https://api-free.deepl.com/v2/translate"
  : "https://api.deepl.com/v2/translate";

const SRC = new URL("../app/vision/messages/en.json", import.meta.url);
const OUT_DIR = new URL("../app/vision/messages/", import.meta.url);

const TARGETS = [
  { code: "zh", deepl: "ZH-HANS" },
  { code: "th", deepl: "TH" },
  { code: "ka", deepl: "KA" },
];

// Proper nouns we keep in English rather than letting DeepL transliterate them.
const KEEP_ENGLISH = new Set([
  "projects.boardbox.name",
  "projects.withcoach.name",
  "projects.raft.name",
  "raftCities.heading",
  "signoff.name",
]);

const stripMarkers = (s) => s.replace(/«([^»]+)»/g, "$1");

// Collect every string leaf as { path, value }, including array items.
function collect(node, prefix, acc) {
  for (const [k, v] of Object.entries(node)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") {
      acc.push({ path, value: v });
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        const ip = `${path}.${i}`;
        if (typeof item === "string") acc.push({ path: ip, value: item });
        else collect(item, ip, acc);
      });
    } else if (v && typeof v === "object") {
      collect(v, path, acc);
    }
  }
}

function setPath(obj, path, value) {
  const keys = path.split(".");
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    cur = cur[/^\d+$/.test(k) ? Number(k) : k];
  }
  const last = keys[keys.length - 1];
  cur[/^\d+$/.test(last) ? Number(last) : last] = value;
}

async function translateAll(texts, targetLang) {
  const out = [];
  for (let i = 0; i < texts.length; i += 40) {
    const chunk = texts.slice(i, i + 40);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: chunk,
        source_lang: "EN",
        target_lang: targetLang,
      }),
    });
    if (!res.ok) {
      throw new Error(
        `DeepL ${targetLang} failed (${res.status}): ${await res.text()}`,
      );
    }
    const data = await res.json();
    out.push(...data.translations.map((t) => t.text));
  }
  return out;
}

const en = JSON.parse(await readFile(SRC, "utf8"));
const leaves = [];
collect(en, "", leaves);

const translatable = leaves.filter((l) => !KEEP_ENGLISH.has(l.path));
const texts = translatable.map((l) => stripMarkers(l.value));

console.log(
  `Translating ${texts.length} strings into ${TARGETS.map((t) => t.code).join(", ")} via ${ENDPOINT}`,
);

for (const target of TARGETS) {
  const result = structuredClone(en);
  const translated = await translateAll(texts, target.deepl);
  translatable.forEach((l, i) => setPath(result, l.path, translated[i]));
  // Keep proper nouns in English (markers stripped — there are none on these).
  leaves
    .filter((l) => KEEP_ENGLISH.has(l.path))
    .forEach((l) => setPath(result, l.path, stripMarkers(l.value)));

  const dest = new URL(`${target.code}.json`, OUT_DIR);
  await writeFile(dest, `${JSON.stringify(result, null, 2)}\n`);
  console.log(`  ✓ wrote ${target.code}.json`);
}

console.log("Done.");
