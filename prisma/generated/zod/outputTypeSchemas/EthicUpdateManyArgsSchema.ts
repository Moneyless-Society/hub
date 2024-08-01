import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicUpdateManyMutationInputSchema } from '../inputTypeSchemas/EthicUpdateManyMutationInputSchema'
import { EthicUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EthicUncheckedUpdateManyInputSchema'
import { EthicWhereInputSchema } from '../inputTypeSchemas/EthicWhereInputSchema'

export const EthicUpdateManyArgsSchema: z.ZodType<Prisma.EthicUpdateManyArgs> = z.object({
  data: z.union([ EthicUpdateManyMutationInputSchema,EthicUncheckedUpdateManyInputSchema ]),
  where: EthicWhereInputSchema.optional(),
}).strict() ;

export default EthicUpdateManyArgsSchema;
