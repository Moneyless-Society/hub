import { z } from 'zod';

/////////////////////////////////////////
// ETHIC SCHEMA
/////////////////////////////////////////

/**
 * A value that Moneyless Society collectively holds. Those that we require new members consent to are marked as `coreValue`s. Variations of the text are stored in each EthicVersion. After members propose values, other members will have the opportunity to review them and consent, change their ranking of variations, or provide commentary.
 */
export const EthicSchema = z.object({
  id: z.number().int(),
  shortName: z.string().nullable(),
  activeId: z.number().int(),
  coreValue: z.boolean(),
})

export type Ethic = z.infer<typeof EthicSchema>

export default EthicSchema;
