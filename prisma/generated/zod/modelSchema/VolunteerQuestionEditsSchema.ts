import { z } from 'zod';

/////////////////////////////////////////
// VOLUNTEER QUESTION EDITS SCHEMA
/////////////////////////////////////////

export const VolunteerQuestionEditsSchema = z.object({
  questionId: z.number().int(),
  editorId: z.string(),
  updatedAt: z.coerce.date(),
})

export type VolunteerQuestionEdits = z.infer<typeof VolunteerQuestionEditsSchema>

export default VolunteerQuestionEditsSchema;
