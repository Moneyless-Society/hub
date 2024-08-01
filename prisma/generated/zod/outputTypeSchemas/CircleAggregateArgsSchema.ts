import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleWhereInputSchema } from '../inputTypeSchemas/CircleWhereInputSchema'
import { CircleOrderByWithRelationInputSchema } from '../inputTypeSchemas/CircleOrderByWithRelationInputSchema'
import { CircleWhereUniqueInputSchema } from '../inputTypeSchemas/CircleWhereUniqueInputSchema'

export const CircleAggregateArgsSchema: z.ZodType<Prisma.CircleAggregateArgs> = z.object({
  where: CircleWhereInputSchema.optional(),
  orderBy: z.union([ CircleOrderByWithRelationInputSchema.array(),CircleOrderByWithRelationInputSchema ]).optional(),
  cursor: CircleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CircleAggregateArgsSchema;
