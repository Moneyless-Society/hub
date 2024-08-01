import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimCreateManyInputSchema } from '../inputTypeSchemas/CircleAimCreateManyInputSchema'

export const CircleAimCreateManyArgsSchema: z.ZodType<Prisma.CircleAimCreateManyArgs> = z.object({
  data: z.union([ CircleAimCreateManyInputSchema,CircleAimCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CircleAimCreateManyArgsSchema;
