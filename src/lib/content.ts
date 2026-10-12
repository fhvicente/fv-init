import { getCollection } from "astro:content";

export const getPosts = async () =>
    (await getCollection("journal", ({ data }) => !data.draft)).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
    );

export const getProjects = async () =>
    (await getCollection("projects")).sort(
        (a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf(),
    );

export const formatDate = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
