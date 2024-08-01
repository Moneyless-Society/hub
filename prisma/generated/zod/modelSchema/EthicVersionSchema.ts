import { z } from 'zod';

/////////////////////////////////////////
// ETHIC VERSION SCHEMA
/////////////////////////////////////////

export const EthicVersionSchema = z.object({
  id: z.number().int(),
  text: z.string(),
  ethicId: z.number().int(),
  submitterId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type EthicVersion = z.infer<typeof EthicVersionSchema>

export default EthicVersionSchema;
