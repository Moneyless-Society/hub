import { z } from 'zod';

/////////////////////////////////////////
// CIRCLE AIM EDITS SCHEMA
/////////////////////////////////////////

export const CircleAimEditsSchema = z.object({
  id: z.number().int(),
  circleAimId: z.number().int(),
  editorId: z.string().nullable(),
})

export type CircleAimEdits = z.infer<typeof CircleAimEditsSchema>

export default CircleAimEditsSchema;
