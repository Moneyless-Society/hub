import { z } from 'zod';

/////////////////////////////////////////
// CIRCLE AIM SCHEMA
/////////////////////////////////////////

export const CircleAimSchema = z.object({
  id: z.number().int(),
  circleId: z.number().int().nullable(),
  text: z.string(),
  isActive: z.boolean(),
})

export type CircleAim = z.infer<typeof CircleAimSchema>

export default CircleAimSchema;
