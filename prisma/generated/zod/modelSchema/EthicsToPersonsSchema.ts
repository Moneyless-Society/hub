import { z } from 'zod';

/////////////////////////////////////////
// ETHICS TO PERSONS SCHEMA
/////////////////////////////////////////

/**
 * Versions of an ethical value's responses to different versions of a given ethical value are ranked in `versionRanking`.
 */
export const EthicsToPersonsSchema = z.object({
  ethicId: z.number().int(),
  personId: z.string(),
  ranking: z.number().int().array(),
  updatedAt: z.coerce.date(),
})

export type EthicsToPersons = z.infer<typeof EthicsToPersonsSchema>

export default EthicsToPersonsSchema;
