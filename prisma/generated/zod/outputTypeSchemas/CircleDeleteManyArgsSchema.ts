import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleWhereInputSchema } from '../inputTypeSchemas/CircleWhereInputSchema'

export const CircleDeleteManyArgsSchema: z.ZodType<Prisma.CircleDeleteManyArgs> = z.object({
  where: CircleWhereInputSchema.optional(),
}).strict() ;

export default CircleDeleteManyArgsSchema;
