import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleCreateManyInputSchema } from '../inputTypeSchemas/CircleCreateManyInputSchema'

export const CircleCreateManyArgsSchema: z.ZodType<Prisma.CircleCreateManyArgs> = z.object({
  data: z.union([ CircleCreateManyInputSchema,CircleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CircleCreateManyArgsSchema;
