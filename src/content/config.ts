import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    category: z.string(),
    readingTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  writing: writingCollection,
};
