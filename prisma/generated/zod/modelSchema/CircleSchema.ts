import { z } from 'zod';

/////////////////////////////////////////
// CIRCLE SCHEMA
/////////////////////////////////////////

export const CircleSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  mission: z.string(),
  description: z.string(),
  domains: z.string().array(),
  createdAt: z.coerce.date(),
  updatedBy: z.coerce.date(),
  isActive: z.boolean(),
})

export type Circle = z.infer<typeof CircleSchema>

export default CircleSchema;
