import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsCreateManyInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsCreateManyInputSchema'

export const EthicVersionsToPersonsCreateManyArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateManyArgs> = z.object({
  data: z.union([ EthicVersionsToPersonsCreateManyInputSchema,EthicVersionsToPersonsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicVersionsToPersonsCreateManyArgsSchema;
