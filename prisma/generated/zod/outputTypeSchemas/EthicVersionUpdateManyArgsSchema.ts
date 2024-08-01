import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionUpdateManyMutationInputSchema } from '../inputTypeSchemas/EthicVersionUpdateManyMutationInputSchema'
import { EthicVersionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/EthicVersionUncheckedUpdateManyInputSchema'
import { EthicVersionWhereInputSchema } from '../inputTypeSchemas/EthicVersionWhereInputSchema'

export const EthicVersionUpdateManyArgsSchema: z.ZodType<Prisma.EthicVersionUpdateManyArgs> = z.object({
  data: z.union([ EthicVersionUpdateManyMutationInputSchema,EthicVersionUncheckedUpdateManyInputSchema ]),
  where: EthicVersionWhereInputSchema.optional(),
}).strict() ;

export default EthicVersionUpdateManyArgsSchema;
