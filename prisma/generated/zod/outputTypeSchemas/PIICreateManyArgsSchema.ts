import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIICreateManyInputSchema } from '../inputTypeSchemas/PIICreateManyInputSchema'

export const PIICreateManyArgsSchema: z.ZodType<Prisma.PIICreateManyArgs> = z.object({
  data: z.union([ PIICreateManyInputSchema,PIICreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PIICreateManyArgsSchema;
