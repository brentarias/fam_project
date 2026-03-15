import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      categories: z.array(
        z.enum([
          'Digital Distraction',
          'Communication',
          'Child Development',
          'Family',
          'Date Night',
          'Parenting',
          'Relationships',
          'Screen Time',
          'Personal Development',
          'Uncategorized',
        ])
      ).min(1),
      excerpt: z.string(),
      featuredImage: image(),
      publishDate: z.coerce.date(),
    }),
});

const team = defineCollection({
  loader: glob({ base: './src/content/team', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      photo: image(),
      bio: z.string(),
      order: z.number(),
    }),
});

export const collections = { articles, team };
