import { z } from 'zod';

/////////////////////////////////////////
// VOLUNTEER RESPONSE SCHEMA
/////////////////////////////////////////

export const VolunteerResponseSchema = z.object({
  questionId: z.number().int(),
  responderId: z.string(),
  answer: z.string(),
  updatedAt: z.coerce.date(),
  importerId: z.string().nullable(),
  createdAt: z.coerce.date(),
  submittedAt: z.coerce.date().nullable(),
})

export type VolunteerResponse = z.infer<typeof VolunteerResponseSchema>

export default VolunteerResponseSchema;
