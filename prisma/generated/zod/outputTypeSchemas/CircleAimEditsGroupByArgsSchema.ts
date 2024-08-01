import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsWhereInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereInputSchema'
import { CircleAimEditsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CircleAimEditsOrderByWithAggregationInputSchema'
import { CircleAimEditsScalarFieldEnumSchema } from '../inputTypeSchemas/CircleAimEditsScalarFieldEnumSchema'
import { CircleAimEditsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CircleAimEditsScalarWhereWithAggregatesInputSchema'

export const CircleAimEditsGroupByArgsSchema: z.ZodType<Prisma.CircleAimEditsGroupByArgs> = z.object({
  where: CircleAimEditsWhereInputSchema.optional(),
  orderBy: z.union([ CircleAimEditsOrderByWithAggregationInputSchema.array(),CircleAimEditsOrderByWithAggregationInputSchema ]).optional(),
  by: CircleAimEditsScalarFieldEnumSchema.array(),
  having: CircleAimEditsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CircleAimEditsGroupByArgsSchema;
