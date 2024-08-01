import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsCreateManyInputSchema } from '../inputTypeSchemas/CircleAimEditsCreateManyInputSchema'

export const CircleAimEditsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CircleAimEditsCreateManyAndReturnArgs> = z.object({
  data: z.union([ CircleAimEditsCreateManyInputSchema,CircleAimEditsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CircleAimEditsCreateManyAndReturnArgsSchema;
