import { z } from 'zod';

/////////////////////////////////////////
// ETHIC VERSIONS TO PERSONS SCHEMA
/////////////////////////////////////////

/**
 * Commentary and consent by an individual to a version of an ethical value.
 */
export const EthicVersionsToPersonsSchema = z.object({
  ethicVersionId: z.number().int(),
  personId: z.string(),
  consent: z.boolean(),
  commentary: z.string().nullable(),
})

export type EthicVersionsToPersons = z.infer<typeof EthicVersionsToPersonsSchema>

export default EthicVersionsToPersonsSchema;
