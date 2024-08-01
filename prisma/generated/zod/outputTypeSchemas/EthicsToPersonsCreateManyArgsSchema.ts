import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsCreateManyInputSchema } from '../inputTypeSchemas/EthicsToPersonsCreateManyInputSchema'

export const EthicsToPersonsCreateManyArgsSchema: z.ZodType<Prisma.EthicsToPersonsCreateManyArgs> = z.object({
  data: z.union([ EthicsToPersonsCreateManyInputSchema,EthicsToPersonsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicsToPersonsCreateManyArgsSchema;
