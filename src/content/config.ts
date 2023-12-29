import { defineCollection } from "astro:content";

import postSchema from "~/schemas/postsSchema";

const posts = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  posts,
};
