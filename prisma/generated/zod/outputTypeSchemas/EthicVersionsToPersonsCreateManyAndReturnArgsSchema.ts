import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsCreateManyInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsCreateManyInputSchema'

export const EthicVersionsToPersonsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateManyAndReturnArgs> = z.object({
  data: z.union([ EthicVersionsToPersonsCreateManyInputSchema,EthicVersionsToPersonsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicVersionsToPersonsCreateManyAndReturnArgsSchema;
