import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleWhereInputSchema } from '../inputTypeSchemas/CircleWhereInputSchema'
import { CircleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CircleOrderByWithAggregationInputSchema'
import { CircleScalarFieldEnumSchema } from '../inputTypeSchemas/CircleScalarFieldEnumSchema'
import { CircleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CircleScalarWhereWithAggregatesInputSchema'

export const CircleGroupByArgsSchema: z.ZodType<Prisma.CircleGroupByArgs> = z.object({
  where: CircleWhereInputSchema.optional(),
  orderBy: z.union([ CircleOrderByWithAggregationInputSchema.array(),CircleOrderByWithAggregationInputSchema ]).optional(),
  by: CircleScalarFieldEnumSchema.array(),
  having: CircleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CircleGroupByArgsSchema;
