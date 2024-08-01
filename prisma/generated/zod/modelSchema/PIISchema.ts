import { z } from 'zod';

/////////////////////////////////////////
// PII SCHEMA
/////////////////////////////////////////

/**
 * Personally-identifying information. Authorize access to this information appropriately.
 */
export const PIISchema = z.object({
  id: z.string(),
  personId: z.string(),
  legalFirstName: z.string().nullable(),
  legalLastName: z.string().nullable(),
  address: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  discord: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type PII = z.infer<typeof PIISchema>

export default PIISchema;
