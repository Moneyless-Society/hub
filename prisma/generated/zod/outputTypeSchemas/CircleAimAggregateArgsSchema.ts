import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimWhereInputSchema } from '../inputTypeSchemas/CircleAimWhereInputSchema'
import { CircleAimOrderByWithRelationInputSchema } from '../inputTypeSchemas/CircleAimOrderByWithRelationInputSchema'
import { CircleAimWhereUniqueInputSchema } from '../inputTypeSchemas/CircleAimWhereUniqueInputSchema'

export const CircleAimAggregateArgsSchema: z.ZodType<Prisma.CircleAimAggregateArgs> = z.object({
  where: CircleAimWhereInputSchema.optional(),
  orderBy: z.union([ CircleAimOrderByWithRelationInputSchema.array(),CircleAimOrderByWithRelationInputSchema ]).optional(),
  cursor: CircleAimWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CircleAimAggregateArgsSchema;
