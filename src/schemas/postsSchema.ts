import { z } from "astro:content";
import { format } from "date-fns";

export type PostCategories =
  | "latest"
  | "insights"
  | "studio tips"
  | "career advice";

const postSchema = z.object({
  title: z
    .string()
    .min(3, { message: "A post title but be at least 3 characters." }),
  author: z
    .string()
    .min(3, { message: "An authors name must be at least 3 characters." })
    .max(50, {
      message: "An authors name should be no more than 50 characters.",
    }),
  categories: z.array(z.custom<PostCategories>()),
  date: z.string().transform((str) => format(new Date(str), "MMMM D, YYYY")),
  featured: z.boolean().default(false),
  image: z.string(),
});

export type PostSchema = z.infer<typeof postSchema>;

export default postSchema;
