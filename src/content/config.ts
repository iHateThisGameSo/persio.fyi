import { defineCollection, z } from 'astro:content';
import { isPublicationDate } from '../lib/writing.mjs';

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().refine(isPublicationDate, 'Use a valid calendar date in YYYY-MM-DD format.'),
    description: z.string(),
    category: z.string(),
    kind: z.enum(['note', 'essay']).default('note'),
    draft: z.boolean().default(true),
  }),
});

export const collections = { writing: writingCollection };
