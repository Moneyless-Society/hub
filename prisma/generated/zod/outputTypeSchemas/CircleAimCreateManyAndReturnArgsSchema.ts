import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimCreateManyInputSchema } from '../inputTypeSchemas/CircleAimCreateManyInputSchema'

export const CircleAimCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CircleAimCreateManyAndReturnArgs> = z.object({
  data: z.union([ CircleAimCreateManyInputSchema,CircleAimCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CircleAimCreateManyAndReturnArgsSchema;
