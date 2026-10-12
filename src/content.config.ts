import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.coerce.date(),
            summary: z.string(),
            stack: z.array(z.string()),
            cover: image(),
            coverAlt: z.string(),
            links: z.object({ live: z.url().optional(), repo: z.url().optional() }).default({}),
            featured: z.boolean().default(false),
            order: z.number().default(99),
        }),
});

const journal = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/journal" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.coerce.date(),
            summary: z.string(),
            cover: image().optional(),
            coverAlt: z.string().optional(),
            tags: z.array(z.string()).default([]),
            draft: z.boolean().default(false),
        }),
});

export const collections = { projects, journal };
