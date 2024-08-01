import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimWhereInputSchema } from '../inputTypeSchemas/CircleAimWhereInputSchema'

export const CircleAimDeleteManyArgsSchema: z.ZodType<Prisma.CircleAimDeleteManyArgs> = z.object({
  where: CircleAimWhereInputSchema.optional(),
}).strict() ;

export default CircleAimDeleteManyArgsSchema;
