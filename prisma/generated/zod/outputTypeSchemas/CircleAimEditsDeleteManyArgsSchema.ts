import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsWhereInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereInputSchema'

export const CircleAimEditsDeleteManyArgsSchema: z.ZodType<Prisma.CircleAimEditsDeleteManyArgs> = z.object({
  where: CircleAimEditsWhereInputSchema.optional(),
}).strict() ;

export default CircleAimEditsDeleteManyArgsSchema;
