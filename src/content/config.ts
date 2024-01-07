import { defineCollection, z } from "astro:content";

export const collections = {
  about: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      tagline: z.string(),
      content: z.object({
        background: z.string(),
        education: z.string(),
        skills: z.string(),
      }),
    }),
  }),
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      link: z.string().optional(),
      img: z.string(),
      img_alt: z.string().optional(),
    }),
  }),
};
