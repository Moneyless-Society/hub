import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsCreateManyInputSchema } from '../inputTypeSchemas/CircleAimEditsCreateManyInputSchema'

export const CircleAimEditsCreateManyArgsSchema: z.ZodType<Prisma.CircleAimEditsCreateManyArgs> = z.object({
  data: z.union([ CircleAimEditsCreateManyInputSchema,CircleAimEditsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CircleAimEditsCreateManyArgsSchema;
