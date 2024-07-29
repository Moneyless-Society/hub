import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionCreateManyInputSchema } from '../inputTypeSchemas/EthicVersionCreateManyInputSchema'

export const EthicVersionCreateManyArgsSchema: z.ZodType<Prisma.EthicVersionCreateManyArgs> = z.object({
  data: z.union([ EthicVersionCreateManyInputSchema,EthicVersionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicVersionCreateManyArgsSchema;
