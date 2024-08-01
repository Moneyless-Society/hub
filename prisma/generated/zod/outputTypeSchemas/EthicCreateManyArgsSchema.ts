import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicCreateManyInputSchema } from '../inputTypeSchemas/EthicCreateManyInputSchema'

export const EthicCreateManyArgsSchema: z.ZodType<Prisma.EthicCreateManyArgs> = z.object({
  data: z.union([ EthicCreateManyInputSchema,EthicCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicCreateManyArgsSchema;
