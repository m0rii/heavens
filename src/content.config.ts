import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';

const legal = defineCollection({
  type: 'content',
  schema: z.object({
    locale: z.enum(['hy', 'en', 'ru', 'de', 'fa', 'ar']),
    title: z.string(),
    reviewStatus: z.enum([
      'draft',
      'linguistic_reviewed',
      'legal_reviewed',
      'approved',
    ]),
  }),
});

export const collections = { legal };
