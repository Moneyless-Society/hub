import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicCreateManyInputSchema } from '../inputTypeSchemas/EthicCreateManyInputSchema'

export const EthicCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EthicCreateManyAndReturnArgs> = z.object({
  data: z.union([ EthicCreateManyInputSchema,EthicCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicCreateManyAndReturnArgsSchema;
