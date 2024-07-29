import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EthicsToPersonsUpdateManyMutationInputSchema'
import { EthicsToPersonsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EthicsToPersonsUncheckedUpdateManyInputSchema'
import { EthicsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereInputSchema'

export const EthicsToPersonsUpdateManyArgsSchema: z.ZodType<Prisma.EthicsToPersonsUpdateManyArgs> = z.object({
  data: z.union([ EthicsToPersonsUpdateManyMutationInputSchema,EthicsToPersonsUncheckedUpdateManyInputSchema ]),
  where: EthicsToPersonsWhereInputSchema.optional(),
}).strict() ;

export default EthicsToPersonsUpdateManyArgsSchema;
