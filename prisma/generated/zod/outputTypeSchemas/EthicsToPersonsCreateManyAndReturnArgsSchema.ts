import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsCreateManyInputSchema } from '../inputTypeSchemas/EthicsToPersonsCreateManyInputSchema'

export const EthicsToPersonsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EthicsToPersonsCreateManyAndReturnArgs> = z.object({
  data: z.union([ EthicsToPersonsCreateManyInputSchema,EthicsToPersonsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default EthicsToPersonsCreateManyAndReturnArgsSchema;
