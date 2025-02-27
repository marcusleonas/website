import { defineCollection, z } from "astro:content";

const showCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    showDate: z.coerce.date(),
    director: z.string(),
    company: z.string(),
    roles: z.array(z.string()),
    published: z.boolean().default(false),
  }),
});

export const collections = {
  show: showCollection,
};
