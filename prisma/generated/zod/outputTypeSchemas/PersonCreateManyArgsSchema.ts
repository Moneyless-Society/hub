import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonCreateManyInputSchema } from '../inputTypeSchemas/PersonCreateManyInputSchema'

export const PersonCreateManyArgsSchema: z.ZodType<Prisma.PersonCreateManyArgs> = z.object({
  data: z.union([ PersonCreateManyInputSchema,PersonCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default PersonCreateManyArgsSchema;
