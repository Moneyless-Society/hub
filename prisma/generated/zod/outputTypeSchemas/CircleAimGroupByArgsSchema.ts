import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimWhereInputSchema } from '../inputTypeSchemas/CircleAimWhereInputSchema'
import { CircleAimOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CircleAimOrderByWithAggregationInputSchema'
import { CircleAimScalarFieldEnumSchema } from '../inputTypeSchemas/CircleAimScalarFieldEnumSchema'
import { CircleAimScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CircleAimScalarWhereWithAggregatesInputSchema'

export const CircleAimGroupByArgsSchema: z.ZodType<Prisma.CircleAimGroupByArgs> = z.object({
  where: CircleAimWhereInputSchema.optional(),
  orderBy: z.union([ CircleAimOrderByWithAggregationInputSchema.array(),CircleAimOrderByWithAggregationInputSchema ]).optional(),
  by: CircleAimScalarFieldEnumSchema.array(),
  having: CircleAimScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CircleAimGroupByArgsSchema;
