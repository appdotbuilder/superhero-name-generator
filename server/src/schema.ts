
import { z } from 'zod';

// Superhero name generation input schema
export const generateSuperheroNameInputSchema = z.object({
  realName: z.string().min(1, 'Real name is required').max(100, 'Name too long')
});

export type GenerateSuperheroNameInput = z.infer<typeof generateSuperheroNameInputSchema>;

// Superhero name response schema
export const superheroNameSchema = z.object({
  realName: z.string(),
  superheroName: z.string(),
  generatedAt: z.coerce.date()
});

export type SuperheroName = z.infer<typeof superheroNameSchema>;

// Optional: Schema for storing generated names in database
export const superheroRecordSchema = z.object({
  id: z.number(),
  real_name: z.string(),
  superhero_name: z.string(),
  created_at: z.coerce.date()
});

export type SuperheroRecord = z.infer<typeof superheroRecordSchema>;
