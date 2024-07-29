import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionCreateManyInputSchema } from '../inputTypeSchemas/EthicVersionCreateManyInputSchema'

export const EthicVersionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EthicVersionCreateManyAndReturnArgs> = z.object({
  data: z.union([ EthicVersionCreateManyInputSchema,EthicVersionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicVersionCreateManyAndReturnArgsSchema;
