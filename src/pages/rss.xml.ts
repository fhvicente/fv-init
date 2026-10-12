import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../lib/content";
import { SITE } from "../site";

export async function GET(context: APIContext) {
    return rss({
        title: `${SITE.name} — Journal`,
        description: SITE.description,
        site: context.site!,
        items: (await getPosts()).map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.summary,
            link: `/journal/${post.id}/`,
        })),
    });
}
