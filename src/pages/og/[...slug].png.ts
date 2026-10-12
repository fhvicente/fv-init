import type { APIRoute, GetStaticPaths } from "astro";
import sharp from "sharp";
import { getPosts, getProjects } from "../../lib/content";
import { SITE } from "../../site";

// OG images rendered at build time from an SVG template (RF-12).
export const getStaticPaths = (async () => [
    { params: { slug: "default" }, props: { title: SITE.name, kicker: "Fullstack & AI Engineer" } },
    ...(await getProjects()).map((p) => ({
        params: { slug: `projects/${p.id}` },
        props: { title: p.data.title, kicker: "Case study" },
    })),
    ...(await getPosts()).map((p) => ({
        params: { slug: `journal/${p.id}` },
        props: { title: p.data.title, kicker: "Journal" },
    })),
]) satisfies GetStaticPaths;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// ponytail: greedy word wrap by character count, good enough for display titles
function wrap(text: string, max = 22) {
    const lines: string[] = [];
    for (const word of text.split(/\s+/)) {
        const last = lines.at(-1);
        if (last !== undefined && (last + " " + word).length <= max) lines[lines.length - 1] = `${last} ${word}`;
        else lines.push(word);
    }
    return lines.slice(0, 3);
}

export const GET: APIRoute = async ({ props }) => {
    const { title, kicker } = props as { title: string; kicker: string };
    const lines = wrap(title);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><radialGradient id="g" cx="0.85" cy="0.2" r="0.9"><stop offset="0" stop-color="#3a2c10"/><stop offset="1" stop-color="#0b100d"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="110" font-family="sans-serif" font-size="28" letter-spacing="4" fill="#a9b3a5">${esc(kicker.toUpperCase())}</text>
  ${lines
      .map(
          (l, i) =>
              `<text x="80" y="${250 + i * 96}" font-family="sans-serif" font-weight="700" font-size="88" letter-spacing="-3" fill="#ede8dc">${esc(l)}</text>`,
      )
      .join("")}
  <text x="80" y="560" font-family="sans-serif" font-size="30" fill="#e8b24a">${esc(SITE.name)}</text>
</svg>`;
    const png = await sharp(Buffer.from(svg)).png().toBuffer();
    return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};
