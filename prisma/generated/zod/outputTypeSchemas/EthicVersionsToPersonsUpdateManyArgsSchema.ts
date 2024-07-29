import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsUpdateManyMutationInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsUpdateManyMutationInputSchema'
import { EthicVersionsToPersonsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsUncheckedUpdateManyInputSchema'
import { EthicVersionsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereInputSchema'

export const EthicVersionsToPersonsUpdateManyArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsUpdateManyArgs> = z.object({
  data: z.union([ EthicVersionsToPersonsUpdateManyMutationInputSchema,EthicVersionsToPersonsUncheckedUpdateManyInputSchema ]),
  where: EthicVersionsToPersonsWhereInputSchema.optional(),
}).strict() ;

export default EthicVersionsToPersonsUpdateManyArgsSchema;
