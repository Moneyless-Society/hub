import { z } from 'zod';
import { ContactMethodSchema } from '../inputTypeSchemas/ContactMethodSchema'

/////////////////////////////////////////
// PERSON SCHEMA
/////////////////////////////////////////

/**
 * Non-identifying information linked to a single person.
 */
export const PersonSchema = z.object({
  preferredContactMethod: ContactMethodSchema.nullable(),
  id: z.string(),
  name: z.string(),
  pronouns: z.string().array(),
  bio: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  isActive: z.boolean(),
  volunteerQuestionId: z.number().int(),
})

export type Person = z.infer<typeof PersonSchema>

export default PersonSchema;
