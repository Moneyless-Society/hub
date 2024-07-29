import { z } from 'zod';

/////////////////////////////////////////
// VOLUNTEER QUESTION SCHEMA
/////////////////////////////////////////

export const VolunteerQuestionSchema = z.object({
  id: z.number().int(),
  text: z.string().array(),
  updatedAt: z.coerce.date(),
})

export type VolunteerQuestion = z.infer<typeof VolunteerQuestionSchema>

export default VolunteerQuestionSchema;
